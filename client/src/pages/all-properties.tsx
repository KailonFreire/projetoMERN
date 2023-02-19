import { Add } from '@mui/icons-material';
import { useList } from '@pankod/refine-core';
import { useNavigate } from '@pankod/refine-react-router-v6';
import {Box, Stack, Typography} from '@pankod/refine-mui';
import { PropertyCard, CustomButton } from 'components';

const AllProperties = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={24} fontWeight={700} color="#11142d">Property List</Typography> 
        <CustomButton
        title="Add properties"
        backgroundColor="#475be8"
        color="#fcfcfc"
        icon={<Add />}
        handleClick={() => navigate('/properties/create')} 
        />
      </Stack>
    </Box>
  )
}
export default AllProperties