import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button} from '@pankod/refine-mui';
import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';


const Form = ({type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Property
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form 
          style={{
            marginTop: '20px', 
            width: "100%", 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px'
          }}
        onSubmit={handleSubmit(onFinishHandler)}
        >
          
          <FormControl>
            <FormHelperText sx=
              {{fontWeigth: 500, 
                margin: '10px 0', 
                fontSize: 16, 
                color: '#11142d'
              }}>
              Enter property
              </FormHelperText>
            <TextField 
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register('title', {required:true})}
            />
          </FormControl>
          
          <FormControl>
            <FormHelperText 
            sx={{
            fontWeigth: 500, 
            margin: '10px 0', 
            fontSize: 16,
            color: '#11142d'
            }}>
              Enter description
              </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write description"
              style={{
                width: "100%", 
                background: "transparent",
                fontSize: '16px', 
                borderColor: 'rgba(0,0,0,0,0.23)',
                borderRadius: 6, 
                padding: 10, 
                color: '#919191'
              }}
              {...register('description', {required:true})}
            />
          </FormControl>
          
          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText 
              sx={{
                fontWeigth: 500, 
                margin: '10px 0', 
                fontSize: 16, 
                color: '#11142d'
              }}
              >
                Select Property Type
              </FormHelperText>
              <Select 
                variant='outlined'
                color="info"
                displayEmpty
                required
                inputProps={{'aria-label':'Without label'}}
                defaultValue="apartment"
                {...register('propertyType', {
                  require: true
                })}
              >
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="farmhouse">Farm House</MenuItem>
                <MenuItem value="condos">Condos</MenuItem>
                <MenuItem value="townhouse">Town House</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="Studio">Studio</MenuItem>
                <MenuItem value="chalet">Chalet</MenuItem>
                
              </Select>
              </FormControl>
              <FormControl>
              <FormHelperText 
              sx=
              {{
                fontWeigth: 500, 
                margin: '10px 0', 
                fontSize: 16, 
                color: '#11142d'
                }}
              >
                Enter Property Price
              </FormHelperText>
              <TextField 
                fullWidth
                required
                id="outlined-basic"
                color="info"
                type="number"
                variant="outlined"
                {...register('price', {
                  required:true
                })}
              />
            </FormControl>
          </Stack>

            <FormControl>
              <FormHelperText sx={{
                fontWeigth: 500, 
                margin: '10px 0', 
                fontSize: 16, 
                color: '#11142d' 
                }}>
                Enter Location
                </FormHelperText>
              <TextField 
                fullWidth
                required
                id="outlined-basic"
                color="info"
                variant="outlined"
                {...register('location', {required:true})}
              />
            </FormControl>

                  <Stack direction="column" gap={1} justifyContent="center" mb={2}>
                      <Stack direction="row" gap={2}> 
                      <Typography 
                        color="#11142d" 
                        fontSize={16} 
                        fontWeight={500} 
                        my="10px">
                          Property Photo
                      </Typography>
                      <Button component="label" sx={{ display: 'fit=content', color: "#2ed480", textTransform:'capitalize', fontSize: 16}}>
                        Upload *
                        <input 
                          hidden
                          accept="image/*"
                          type="file"
                          onChange={(e) => {
                            //@ts-ignore
                            handleImageChange(e.target.files[0])
                          }}
                        />
                      </Button>
                    </Stack>
                      <Typography fontSize={14} color="#808191" sx={{wordBreak: 'break-all'}}>{propertyImage?.name}</Typography>
                  </Stack>
            <CustomButton 
              type="submit"
              title={formLoading ? 'Submitting...' : 'Submit'}
              backgroundColor="#475be8"
              color="#fcfcfc"
            />
        </form>
      </Box>
    </Box>
  )
}
 
export default Form


