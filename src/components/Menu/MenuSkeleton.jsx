'use client'

import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function MenuSkeleton({ itemsCount = 4 }) {
  return (
    <nav className="dashboard-menu">
      <ul style={{ display: 'flex', gap: '24px', padding: 0, margin: 0 }}>
        {Array.from({ length: itemsCount }).map((_, i) => (
          <li key={i}>
            <Box
              sx={{
                display: 'inline-block',
                borderRadius: '100px',
                width: 80,     
                height: 28,    
              }}
            >
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                sx={{
                  bgcolor: '#e2e8f0', 
                }}
              />
            </Box>
          </li>
        ))}
      </ul>
    </nav>
  );
}
