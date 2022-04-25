import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { PropsWithChildren, useState } from "react";
import { Controller } from "react-hook-form";
import { urlToHttpOptions } from "url";
import { FormInputProps } from "./FormInputProps";

interface PropValues {
    prop: string;
    prop2: number;
}

interface Options {
    label: string;
    value: string;
    nestedObject: PropValues;
};

const options = [
    {
        label: 'Bubelbia',
        value: 'Bubelbia'
    },
    {
        label: 'Dubelbia',
        value: 'Dubelbia'
    },
];


export const FormInputDropdown = ({
    name,
    control,
    label
}: FormInputProps) => {
    const [defaultValue, setDefaultValue] = useState('Select...');
    const dropdownStyle={width:'30vw'};

    const generateSingleOptions = () => {
        return options.map((option: any) => {
            return (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            )
        })
    };

    return (
        <FormControl size={"small"}>
            <InputLabel>{label}</InputLabel>
            <Controller
                render={({ field: { onChange, value }}) => (
                    <Select onChange={onChange} value={value} style={dropdownStyle}>
                        {generateSingleOptions()}
                    </Select>
                )}
                control={control}
                name={name}
            />
        </FormControl>
    )

}