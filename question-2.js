const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = 'message: resolved promise!';
        resolve(success);
      }, 500);
    });
  };
  

  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let error = new Error('error: rejected promise!');
        reject(error);
      }, 500);
    });
  };
    
  console.log(resolvedPromise())
  console.log(rejectedPromise())
 