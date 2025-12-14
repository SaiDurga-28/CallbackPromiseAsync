const getStudents=(req,res)=>{
    //Get data from DB(Logic)
    let stddata={name:"Sai Durga",roll:"23P31A0502"};
    res.status(200).json({data:stddata});
};
const addStudents=(req,res)=>{
    //Add data
    res.status(201).json({message:"Data added successfully"});
}
const newStudents=(req,res)=>{
    //Add data
    const mydata=req.body;
    console.log(mydata);
    res.status(201).json({message:"Data added successfully"});
}
const updateStudents=(req,res)=>{
    //Update data
    let updatedData={name:"Sai Durga Anisetti",roll:"23P31A0502"};
    res.status(200).json({data:updatedData});
}
const deleteStudents=(req,res)=>{
    //Delete data
    res.status(200).json({message:"Data deleted successfully"});
}
export {getStudents,addStudents,updateStudents,deleteStudents,newStudents};