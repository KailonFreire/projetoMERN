import ReactApexCharts from 'react-apexcharts';
import { Typography, Box, Stack } from '@pankod/refine-mui';
import { propertyReferralsInfo } from 'constants/index';

interface ProgressBarProps {
  title: string,
  percentage: number,
  color: string,
}

const ProgressBar = ({ title, percentage, color} : ProgressBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color="#111">
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color="#111">
        {percentage}%
      </Typography>
    </Stack>
    
      <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="e4e9ef">
          <Box
          width={`${percentage}%`}
          bgcolor={color}
          position="absolute"
          height="100%"
          borderRadius={1}
          />
      </Box>
  </Box>
)

const PropertyReferrals = () => {
  return (
    <Box id="chart"
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Stack my="20px" direction="column" gap={4}>
        {propertyReferralsInfo.map((bar) => 
        <ProgressBar key={bar.title}{...bar}/>) }
      </Stack>
     <Typography fontSize={18} fontWeight={600} color="#11142d">
        Property Referrals
      </Typography>
    </Box>
  )
}

export default PropertyReferrals