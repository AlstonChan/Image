# React Image Component

A simple, easy to use image component for React.

## Installation

  ```bash
  npm install @chan_alston/image
  ```

## `Image` usage

```javascript
import React from 'react';
import Image from "@chan_alston/image";

import myImgSmall from "../public/myImgSmall.jpg"
import myImgMedium from "../public/myImgMedium.jpg"
import myImgBig from "../public/myImgBig.jpg"

const ImageComponent = ({ image }) => (
  <figure>
    <LazyLoadImage
      src={myImg} 
      alt="my image"
      w="100px"  // w stands for width
      h="100px" // h stands for height
      className={`${styles.myImage} ${styles.imgContainer}`}
      objFit="contain"
      objPos="bottom 10px right 20px"
      srcSet={`${myImgSmall} 500w,
              ${myImgMedium} 900w,
              ${qmyImgBigq} 1400w`}
      sizes="(min-width: 66em) 33vw,
            (min-width: 44em) 50vw,
            100vw"
      responsive={true}  // defaults to true
      priority={false} /faults to false

    <figcaption>This is my image</figcaption>
  </figure>
);

export default ImageComponent;
```

### Properties of `Image`

| Properties  | Type                   | Mandotary | Default Value |
|-------------|:----------------------:|:---------:|:-------------:|
| src         | String                 | true      |               |
| alt         | String                 | true      |               |
| w           | String                 | false     |               |
| h           | String                 | false     |               |
| className   | String                 | false     |               |
| objFit      | String                 | false     |               |
| objPos      | String                 | false     |               |
| srcSet      | String                 | false     |               |
| sizes       | String                 | false     |               |
| responsive  | Boolean                | false     | true          |
| priority    | Boolean                | false     | false         |
| imgRef      | React.MutableRefObject | false     | null          |
