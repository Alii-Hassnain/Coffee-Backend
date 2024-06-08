const asyncHandler = (requestHander)=> {
    (req,res,next) =>{
        Promise.resolve(requestHander(req,res,next)).catch((err) => next(err))
    }
}




export {asyncHandler}


// higher order function

// const asyncHandler = () =>{}
// const asyncHandler = (func) =>{
//     async ()=>{}
// }



// const asyncHandler = (fn) => async (req , res , next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).jason({
//             success:false,
//             message:err.message
//         })
//     }
// }

