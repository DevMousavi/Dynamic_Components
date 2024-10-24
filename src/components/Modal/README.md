Modal Component
This is a reusable and customizable Modal component built with Next.js 14, TypeScript, and Tailwind CSS. It is designed to handle various edge cases like closing on outside clicks, pressing the Escape key, and handling back button actions. The component is flexible, allowing for easy customization using props for styling and behavior control.

Features
Closes when clicking outside the modal.
Closes when pressing the Escape key.
Handles browser back button to close the modal.
Disables background scroll when the modal is open.
Customizable styles for modal container and background.
Configurable close button position and size.
Installation
To install and use this component in your Next.js project, you can add it directly to your component folder. No additional packages are required.

Example Usage
tsx
Copy code
import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the import path as needed.

const ExamplePage: React.FC = () => {
const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => setShowModal(true)}
            >
                Open Modal
            </button>

            <Modal
                classNameContainer="bg-white p-6 rounded-lg shadow-lg w-96"
                classNameBackGround="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                setClose={setShowModal}
                show={showModal}
                closeSvgBtnSize={24}
                positionCloseBtn="absolute top-2 right-2"
            >
                <h2 className="text-2xl font-bold">This is a Modal</h2>
                <p className="mt-4">Here is some content inside the modal.</p>
                <button
                    className="mt-6 bg-red-500 text-white py-2 px-4 rounded"
                    onClick={() => setShowModal(false)}
                >
                    Close Modal
                </button>
            </Modal>
        </div>
    );

};

export default ExamplePage;
Props
Prop Type Description
children React.ReactNode The content to be displayed inside the modal.
classNameContainer string Tailwind classes for styling the modal container.
classNameBackGround string Tailwind classes for styling the modal background (backdrop).
setClose React.Dispatch<React.SetStateAction<boolean>> Function to set the visibility of the modal (usually useState).
show boolean Boolean that controls whether the modal is shown or hidden.
closeSvgBtnSize number Size (width and height) for the close button SVG icon.
positionCloseBtn string Tailwind classes to position the close button (e.g., "absolute top-2 right-2").
Additional Notes
Handling Close Action: The modal will automatically close when you click outside of it, press the Escape key, or hit the browser's back button.

Custom Styling: You can easily customize the modal and background using Tailwind classes. Just pass your custom classes to classNameContainer and classNameBackGround.

Scroll Behavior: Background scrolling is disabled when the modal is open to ensure better user experience.

Recommendations
Type Safety: For better scalability, you can extract types for the modal's props into a separate types.ts file and import them into your component. This keeps your project organized and the types reusable.

Custom Loader: If your modal might include loading states (e.g., waiting for some API call), consider creating a custom loader component to replace any default browser loader.
