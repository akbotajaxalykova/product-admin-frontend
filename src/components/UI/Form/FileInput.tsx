import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { ChangeEvent, useRef, useState } from 'react';

interface FileInputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    label: string;
}

const FileInput: React.FC<FileInputProps> = ({ onChange, name, label }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [filename, setFilename] = useState<string>('');

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFilename(e.target.files[0].name);
        } else {
            setFilename('');
        }

        onChange(e);
    };

    const activateInput = () => {
        inputRef.current?.click();
    };

    return (
        <>
            <input
                type='file'
                name={name}
                onChange={onFileChange}
                ref={inputRef}
                style={{ display: 'none' }}
            />
            <Grid container direction='row' spacing={2} alignItems='center'>
                <Grid>
                    <TextField
                        variant='outlined'
                        disabled
                        fullWidth
                        label={label}
                        value={filename}
                        onClick={activateInput}
                    />
                </Grid>
                <Grid>
                    <Button variant='contained' onClick={activateInput}>
                        Browse
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default FileInput;