# React Image Component

A simple, easy to use image component for React.

## Getting Started

1. Install the dependencies with `npm install`

    ```bash
    npm install @chan_alston/image
    ```

2. Use the image component like a normal `img` tag

    ```javascript
    import Image from '@chan_alston/image'
    import my_pic from '../public/my_pic'

    export default function App() {
        return (
          <div>
            <ImgRender
              src={my_pic}
              alt="My Picture"
            />
          </div>
        )
    }
    ```
