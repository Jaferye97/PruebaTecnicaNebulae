import { CircularProgress } from '@mui/material';

const LoadingSpinner = ({ size = 40 }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <CircularProgress
        size={size}
        color="primary"
      />
    </div>
  );
};

export default LoadingSpinner;
