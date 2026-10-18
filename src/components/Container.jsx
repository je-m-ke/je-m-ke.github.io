function Container({ className = '', children }) {
  return <div className={`mx-auto max-w-5xl px-4 md:px-8 ${className}`}>{children}</div>
}

export default Container
