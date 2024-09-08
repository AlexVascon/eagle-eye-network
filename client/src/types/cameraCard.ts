export interface CameraCardProps {
  title: string;
  subtitle: string;
  text: string;
  value: string | number;
}

export type CameraCardEmits = {
  (event: 'click', value: string | number): void;
};
