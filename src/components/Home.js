import { Box, Container, Stack, Typography } from '@mui/material'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Google from '@mui/icons-material/Google';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import { useDispatch, useSelector } from 'react-redux';
import MobileMenu from './mobileMenu';
import CircularProgress from '@mui/material/CircularProgress';


function HomeComponent() {
    const [countryData, setCountryData]= useState([])
    const [filteredData, setFilteredData]= useState([])
    const dispatch= useDispatch()
    useEffect(() => {
        getAllData()
    }, [])
    const getAllData = async()=>{
        try {
            dispatch({
              type:"POST_REQUEST"
            })
            const {data} = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag')
            setCountryData(data)
            setFilteredData(data)
            dispatch({type:"POST_SUCCESS",payload:data})
            
          } catch (error) {
            dispatch({
              type:"POST_ERROR",
              payload:error.response.data.message
              })
          }
        
    }

    const {post} = useSelector((post)=>({...post}))
    console.log(post)
     
    const allData= ()=>setFilteredData(countryData)
    const filterHandler = (selected)=>{
        let newData = countryData.filter (data=>data.region===selected)
        setFilteredData(newData)
    }
    
  return (
   <>
    <Container >
        <Stack  direction={"row"} alignItems="center" justifyContent="center" sx={{mt:2,mb:4}}>
            <Typography flex={1} variant='h3'>Countries</Typography>
            <Stack direction={"row"} spacing={3}  sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography flex={1} variant='span' onClick={()=>allData()}>All</Typography>
                <Typography flex={1} variant='span' onClick={()=>filterHandler('Asia')}>Asia</Typography>
                <Typography flex={1} variant='span' onClick={()=>filterHandler('Europe')}>Europe</Typography>
            </Stack>
            <Box  sx={{ display: { sm: 'none',xs: 'block',  } }}>
            <MobileMenu allData={allData} filterHandler={filterHandler}/>
            </Box>
        </Stack>
    </Container>
    
    <Container >
    <Box sx={{ display: 'flex', justifyContent:"center" }}>
     {post.loading && <CircularProgress />} 
    </Box>
    <Grid container spacing={2}>
      
       {filteredData.slice(0, 60).map(item=>(
        <Grid item xs={12} sm={6}>
            <Stack  direction={"row"} spacing={2}  alignItems="center" sx={{border:"2px solid black", padding: 1}}>
            <img src ={item.flag} alt={item.name} width="120px" height="70px"/>
           <Box>
              <Typography flex={1} variant='h5'>{item.name}</Typography>
              <Typography flex={1} variant='span'>{item.region}</Typography>
           </Box>
            </Stack>
        </Grid>
          
       ))}
    </Grid>
    </Container>
    <Container  sx={{width: "370px"}}>
    <Stack direction={"row"} justifyContent="space-between" alignItems="center" sx={{mt:7}} >
            <Google />
            <Facebook />
            <LinkedIn />
            <Twitter/>
         </Stack>
         <Typography variant='h6' textAlign="center" sx={{mt: 3,mb:3}} component='h6'>Example@email.com</Typography>
         <Typography variant='h6' textAlign="center" sx={{mt: 3, mb:7}} component='h6'>Copyright © 2020 Name. All rights reserved.</Typography>
          </Container>
    
    </> 
  )
}

export default HomeComponent