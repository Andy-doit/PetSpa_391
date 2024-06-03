import React from "react";
import { ErrorMessage } from "formik";
import { Input } from "@nextui-org/react";

//de tam vi ch fix dc

export interface MyInputProps {
    id: string;
    field: {
        name: string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };
    placeholder: string;
    error?: string;
    helperText?: string;
}

function MyInput({ field, placeholder, error, helperText }: MyInputProps) {
    return (
        <div className="relative">
            <Input
                {...field}
                id={field.name}
                value={field.value || ""}
                onChange={field.onChange}
                autoComplete="off"
                placeholder="Username" required

            />
            <ErrorMessage
                name={field.name}
                component="p"
                className="pt-2 text-sm text-red-500"
            />
        </div>
    );
}

function MyInputPassword({
    field,
    placeholder,
    error,
    helperText,
}: MyInputProps) {
    const [showPassword, setShowPassword] = React.useState(false);

    const toggleShowPassword = () => setShowPassword(!showPassword);

    return (
        <div>
            <Input
                {...field}
                id={field.name}
                type={showPassword ? "text" : "password"}
                value={field.value || ""}
                onChange={field.onChange}
                placeholder="Enter your password"
                autoComplete="off"
                required

            />
            <ErrorMessage
                name={field.name}
                component="p"
                className="pt-2 text-sm text-red-500"
            />
        </div>
    );
}

export { MyInput, MyInputPassword };
