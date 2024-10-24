# Modal Component

The `Modal` component provides a customizable modal dialog that can be easily integrated into any Next.js project. It supports various features like closing the modal by clicking outside of it, pressing the Escape key, and handling the browser's back button.

## Props

-   **children** (required): The content to be displayed inside the modal.
-   **classNameContainer** (required): Custom CSS classes for styling the modal container.
-   **classNameBackGround** (required): Custom CSS classes for styling the modal background.
-   **setClose** (required): A function to update the state of the modal (open/closed).
-   **show** (required): A boolean flag indicating whether the modal is currently visible.
-   **closeSvgBtnSize** (required): The size of the close button SVG in pixels.
-   **positionCloseBtn** (required): CSS classes to position the close button.

## Usage

```tsx
import React, { useState } from "react";
import Modal from "./Modal";

const ExampleComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            <Modal
                show={isModalOpen}
                setClose={setIsModalOpen}
                classNameContainer="modal-container"
                classNameBackGround="modal-background"
                closeSvgBtnSize={24}
                positionCloseBtn="absolute top-2 right-2"
            >
                <h1>Hello, World!</h1>
                <p>This is a modal content.</p>
            </Modal>
        </div>
    );
};
```

## Recommendations

Custom Styling
The classNameContainer and classNameBackGround props allow for full customization of the modal's appearance. Consider defining a consistent style for modals across your application.

Performance Optimization
If your modal contains heavy content, consider implementing lazy loading for components or images inside the modal to improve performance.

## Notes

The modal will automatically close when clicking outside of it, pressing the Escape key, or when the browser's back button is pressed.
To prevent background scrolling while the modal is open, the component disables scrolling on the body element.
You can customize the close button's size and position by adjusting the closeSvgBtnSize and positionCloseBtn props.
Contributing
Feel free to submit issues or pull requests if you have suggestions or improvements for the Modal component!
