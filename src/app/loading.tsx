const Loading = () => {
    return (
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-178px)]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
        <p className="mt-4 text-lg text-amber-600">Loading...</p>
      </div>
    );
  };
  
  export default Loading;