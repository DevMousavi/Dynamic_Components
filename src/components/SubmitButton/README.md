# SubmitButton Component

The `SubmitButton` component is designed to provide a clean and functional button with built-in loading state support. It is highly customizable and easy to integrate into any project.

## Props

-   **children** (required): The content inside the button (usually text or an icon).
-   **onClick** (optional): A function that triggers when the button is clicked.
-   **className** (optional): Custom CSS classes to style the button.
-   **isLoading** (optional): A boolean flag indicating whether the button is in a loading state. If `true`, it disables the button and shows a loading spinner.

## Usage

```tsx
<SubmitButton
    className="btn-primary"
    isLoading={false}
    onClick={() => console.log("Button clicked!")}
>
    Submit
</SubmitButton>
```

## Recommendations

1. **Separation of Types**  
   It’s a good practice to maintain a separate file for types and interfaces, especially when working with TypeScript. This makes the codebase cleaner and more maintainable. You can create a `types.ts` file and move the `SubmitButtonProps` interface there, like this:

    ```ts
    // types.ts
    export interface SubmitButtonProps {
        children: React.ReactNode;
        onClick?: React.MouseEventHandler<HTMLButtonElement>;
        className?: string;
        isLoading?: boolean;
    }
    ```

    Then, import it back into your component:

    ```tsx
    import { SubmitButtonProps } from "./types";
    ```

2. **Custom Loader Component**  
   Instead of using the default loading spinner, it's better to create a custom loader component. This allows for consistent loading animations across your project and makes it easier to maintain or update the design in one place.

## Notes

-   The button will automatically disable when `isLoading` is `true` to prevent multiple submissions.
-   You can style the button and the loader however you'd like by applying your own `className` or swapping the default loader.
