const Button = ({ variant = 'solid', children, className = '', ...props }) => {
  const base =
    'font-sans font-medium px-6 py-2 rounded-lg transition duration-200';

  const variants = {
    solid:
      'bg-accent text-white hover:bg-accent/90 hover:scale-105',
    outline:
      'border border-accent text-accent hover:bg-accent hover:text-white hover:scale-105',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;