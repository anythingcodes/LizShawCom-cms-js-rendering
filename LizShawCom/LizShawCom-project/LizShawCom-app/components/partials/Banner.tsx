import React from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

interface Props {
  title: string;
  subtitle?: string;
  // imageSrc?: string;
  color?: 'purple' | 'green' | 'blue';
  bottomImage?: 'bubble' | 'wave';
}

const StyledBanner = styled.section<{
  $color: Props['color'];
  $bottomImage: Props['bottomImage'];
}>`
  color: #fff;
  text-align: center;
  padding: 32px 5% 200px 5%;
  position: relative;
  /* Default purple bg*/
  background-color: #35096b;
  background-image: ${({ $color }) => {
    if ($color === 'green') {
      return 'linear-gradient(293deg, #19B4F2 0%, #43CE8B 100%)';
    } else if ($color === 'blue') {
      return 'linear-gradient(293deg, #01DBB0 0%, #6E49D9 100%)';
    }
    /* Default purple bg*/
    return 'linear-gradient(293deg, #ed355b 0%, #1f65db 100%)';
  }};

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    background: url(https://23660466.fs1.hubspotusercontent-na1.net/hubfs/23660466/raw_assets/public/behemoth/images/hero-wave.png)
      bottom no-repeat;
    background-size: 100% 50%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    @media screen and (max-width: 400px) {
      & {
        background-size: 200% 50%;
      }
    }
  }

  ${({ $bottomImage }) =>
    $bottomImage === 'bubble'
      ? `
    &::before {
      display: block;
      content: '';
      height: 100%;
      width: 100%;
      background: url(https://23660466.fs1.hubspotusercontent-na1.net/hubfs/23660466/raw_assets/public/behemoth/images/hero-bubble.png) top center no-repeat;
      background-size: cover;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    &::after {
      background: url(https://23660466.fs1.hubspotusercontent-na1.net/hubfs/23660466/raw_assets/public/behemoth/images/hero-curve.png) bottom no-repeat;
    }
  `
      : null};
`;

const Banner = ({
  color = 'green',
  bottomImage = 'wave',
  // imageSrc,
  subtitle,
  title,
}: Props) => {
  return (
    <StyledComponentsRegistry>
      <StyledBanner $color={color} $bottomImage={bottomImage}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {/* {imageSrc && <img src={imageSrc} alt={title} />} */}
      </StyledBanner>
    </StyledComponentsRegistry>
  );
};

export default Banner;
