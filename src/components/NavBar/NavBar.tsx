import { Box, Link, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { AuthState, selectorAuth } from '../../store/auth';

const main = 'main'
const light = 'light'

const myLinks = [
  { title: 'MARKET', color: 'secondary', positionTop: '120px', positionLeft: '366px' },
  { title: 'PROJECTS', color: 'info', positionTop: '242px', positionLeft: '107px' },
  { title: 'USER', color: 'primary', positionTop: '438px', positionLeft: '301px' },
]

export const NavBar = () => {

  const isAuth = useSelector<AuthState>(selectorAuth);
  const authColor = isAuth ? main : light
  const isLinksActive = isAuth ? 'auto' : 'none'

  return (
    <Box sx={{ position: 'relative' }}>
      {myLinks.map(({ title, color, positionTop, positionLeft }) => (
        <CustomLink key={title}
          title={title}
          color={`${color}.${authColor}`}
          isActive={isLinksActive}
          positionTopLink={positionTop}
          positionLeftLink={positionLeft}
        />
      ))}
    </Box>
  )
}

interface CustomLinkProps {
  title: string;
  color: string;
  isActive: string;
  positionTopLink: string;
  positionLeftLink: string;
}

const CustomLink = ({ title, color, isActive, positionTopLink, positionLeftLink }: CustomLinkProps) => {

  return (
    <Link href="#" color="#fff" underline="none" sx={{
      pointerEvents: isActive,
      top: positionTopLink,
      left: positionLeftLink,
      position: 'absolute',
    }}>
      <Box
        display="flex" justifyContent="center" alignItems="center"
        sx={{
          width: 250,
          height: 250,
          backgroundColor: color,
          borderRadius: '20px',
          transform: 'rotate(-45deg)',
          '&:hover': {
            boxShadow: '-8px 8px 8px rgba(0, 0, 0, 0.6)',
          }
        }}>
        <Typography component="div" textAlign="center" fontSize={24} fontWeight={700}
          sx={{
            transform: 'rotate(45deg)',
          }}
        >{title}</Typography>
      </Box>
    </Link >
  )
}