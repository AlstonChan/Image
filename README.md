# React Image Component

A simple, easy to use image component for React. (Compatible with NextJs)

## Installation

  ```bash
  npm install @chan_alston/image@latest --save
  ```

## `Image` usage

```javascript
import styles from "./image.module.css";

import React from "react";
import Image from "@chan_alston/image";

import myImg from "../public/myImg.jpg";
import myImgSmall from "../public/myImgSmall.jpg";
import myImgMedium from "../public/myImgMedium.jpg";
import myImgBig from "../public/myImgBig.jpg";

const ImageComponent = ({ image }) => (
  <figure>
    <Image
      src={myImg} 
      alt="my image"
      w="100px"  // w stands for width
      h="100px" // h stands for height
      className={`${styles.myImage} ${styles.imgContainer} img`}
      srcSet={`${myImgSmall} 500w,
              ${myImgMedium} 900w,
              ${qmyImgBig} 1400w`}
      sizes="(min-width: 66em) 33vw,
            (min-width: 44em) 50vw,
            100vw"
      responsive  // default to true
      priority={false} // default to false
      placeholder="https://via.placeholder.com/512"
    />
    <figcaption>This is my image</figcaption>
  </figure>
);

export default ImageComponent;
```

### Properties of `Image`

| Properties  | Type                      | Required  | Default Value |
|-------------|:-------------------------:|:---------:|:-------------:|
| src         | String or StaticImageData | true      |               |
| alt         | String                    | true      |               |
| w           | String or Number          | false     |               |
| h           | String or Number          | false     |               |
| className   | String                    | false     |               |
| srcSet      | String                    | false     |               |
| sizes       | String                    | false     |               |
| responsive  | Boolean                   | false     | true          |
| priority    | Boolean                   | false     | false         |
| imgRef      | React.MutableRefObject    | false     | null          |
| style       | CSSProperties             | false     | {}            |
| placeholder | String or StaticImageData | false     |               |

### Notes

- When `w`(width) and/or `h`(height) is set, `responsive` is set to **false** by default, unless explicitly specify with `responsive`.
