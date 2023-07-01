import ImageCircle from '~/components/ui/image-circles/ImageCircles';

import { styled } from 'styled-components';

const HomeImagesContainer = styled.aside`
  display: none;
  position: relative;

  width: calc(100% - 25rem);
  height: 100%;

  @media screen and (min-width: 971px) {
    display: block;
  }
`;

const HomeImages = () => {
  return (
    <HomeImagesContainer>
      <ImageCircle
        src="https://illustrations.popsy.co/white/cooking-soup.svg"
        alt="Cooking soup from Popsy.co"
        $size="225px"
        $top="1.75rem"
        $right="0.75rem"
        $rotate={-13}
        $animationDelay={0.3}
      />
      <ImageCircle
        src="https://illustrations.popsy.co/white/woman-eating-salad.svg"
        alt="Woman eating salad from Popsy.co"
        $size="200px"
        $top="calc(1.75rem + 225px)"
        $right="calc(0.75rem + 225px)"
        $rotate={16}
        $animationDelay={0.6}
      />
      <ImageCircle
        src="https://illustrations.popsy.co/white/chef-serving-chicken.svg"
        alt="Chef serving chicken from Popsy.co"
        $size="150px"
        $bottom="4rem"
        $right="0.75rem"
        $rotate={-11}
        $animationDelay={0.9}
      />
    </HomeImagesContainer>
  );
};

export default HomeImages;
