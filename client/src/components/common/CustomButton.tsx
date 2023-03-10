import React from 'react';
import { Button } from '@pankod/refine-mui';
import { CustomButtonProps } from 'interfaces/common';

const CustomButton = ({title, backgroundColor, color, handleClick, fullWidth, icon, }: CustomButtonProps) => {
  return (
    <Button sx={{
      flex: fullWidth ? 1 : 'unset',
      backgroundColor,
      color,
      padding: "10px 15px",
      width: fullWidth ? "100%" : 'fit-content',
      fontSize:16,
      fontWeight:600,
      gap: "10px",
      textTransform: 'capitalize',
      '&:hover': {
        opacity: 0.9,
        backgroundColor
      }
    }}
    onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton