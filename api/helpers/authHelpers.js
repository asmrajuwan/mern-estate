import bcryptjs from "bcryptjs";

export const hashPassword = async(password)=>{
    try {
      
        const hashedPassword = bcryptjs.hashSync(password, 10);
        return hashedPassword;
    } catch (error) {
        console.log(error)
    }
};

export const comparePassword = async (password,hashedPassword) =>{
    return bcryptjs.compare(password,hashedPassword);
}