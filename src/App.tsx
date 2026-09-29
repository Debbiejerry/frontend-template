import {Outlet} from 'react-router'
import {Box} from '@chakra-ui/react'
import './App.css'

export default function App() {
  return (
    <>
      <Box>
        <Outlet />
      </Box>
    </>
  )
}