interface BackHomeButtonProps {
  variant: string
}

const BackHomeButton = ({ variant }: BackHomeButtonProps) => {
  return (
    <div>
      <a className="mb-6 flex flex-col items-center w-fit" href="./">
        <img className="w-7 h-7" src="./home.svg" alt="home icon" />
        {variant === 'dark' ? (
          <span style={{ color: '#12184F', fontWeight: '500' }}>Back Home</span>
        ) : (
          <span style={{ color: '##F5D186', fontWeight: '500' }}>Back Home</span>
        )}
      </a>
    </div>
  )
}

export default BackHomeButton
