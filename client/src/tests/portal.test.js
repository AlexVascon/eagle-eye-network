import { describe, it, expect, vi, afterEach } from 'vitest'
import axios from 'axios'
import { login } from '../utils/portal.ts'

// Mocking dependencies
vi.mock('axios')
const mockSetItem = vi.fn()
const mockRemoveItem = vi.fn()
const mockGetItem = vi.fn()
vi.stubGlobal('localStorage', {
  getItem: mockGetItem,
  setItem: mockSetItem,
  removeItem: mockRemoveItem,
})

describe('login function', () => {
  afterEach(() => {
    // Clear all mocks after each test
    vi.clearAllMocks()
  })

  it('should handle successful login', async () => {
    // Arrange
    const mockToken = 'mockToken'
    axios.post.mockResolvedValue({ status: 200, data: mockToken })
    const mockRouter = { push: vi.fn() }
    const email = 'test@example.com' // Mock email
    const password = 'mockPassword' // Mock password

    // Act
    await login(email, password, mockRouter)

    // Assert
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/auth/callback',
      {
        email,
        password,
      }
    )
    expect(mockSetItem).toHaveBeenCalledWith('authToken', mockToken)
    expect(mockRouter.push).toHaveBeenCalledWith('/cameras')
  })

  it('should handle failed login', async () => {
    // Arrange
    axios.post.mockResolvedValue({
      status: 400,
      data: { message: 'Invalid credentials' },
    })
    const mockRouter = { push: vi.fn() }
    const email = 'test@example.com' // Mock email
    const password = 'mockPassword' // Mock password

    // Act
    await login(email, password, mockRouter)

    // Assert
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/auth/callback',
      {
        email,
        password,
      }
    )
    expect(mockSetItem).not.toHaveBeenCalled()
    expect(mockRouter.push).not.toHaveBeenCalled()
  })

  it('should handle API errors', async () => {
    // Arrange
    axios.post.mockRejectedValue(new Error('Network error'))
    const mockRouter = { push: vi.fn() }
    const email = 'test@example.com' // Mock email
    const password = 'mockPassword' // Mock password

    // Act
    await login(email, password, mockRouter)

    // Assert
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/auth/callback',
      {
        email,
        password,
      }
    )
    expect(mockSetItem).not.toHaveBeenCalled()
    expect(mockRouter.push).not.toHaveBeenCalled()
  })
})
