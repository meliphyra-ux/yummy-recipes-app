import StyledImageCircle from './StyledImageCircle';

export type StyledImageCircleProps = {
  $size: string;
  $rotate?: number;
  $top?: string;
  $bottom?: string;
  $right?: string;
  $left?: string;
  $backgroundColor?: string;
  $dropShadow?: string;
  $animationDelay?: number;
};

type ImageCircleProps = StyledImageCircleProps & {
  src: string;
  alt: string;
};

const ImageCircle = (props: ImageCircleProps) => {
  return (
    <StyledImageCircle {...props} width={props.$size} height={props.$size} />
  );
};

export default ImageCircle;
