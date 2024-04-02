import contactModel from "../models/contact.model.js";
 

const contactController=
{
create:async(req,res)=>
{
    const addedcontact=await contactModel.create(req.body)
try{
    res.status(201).json({
        message:'contact added successfully',
        contact:addedcontact
    })
}
catch(error)
{
console.log(error.message)
res.status(500).json({
    message:"Internal server Error"
})
}
},
list:async(req,res)=>
{
    const contacts=await contactModel.find()
try{
    res.status(200).json({
        contact:contacts
    })
}
catch(error)
{
console.log(error.message)
res.status(500).json({
    message:"Internal server Error"
})
}
},
GetbyPhone:async(req,res)=>
{
    const phone1=req.params.phone
    const contacts=await contactModel.findOne({phone:phone1})
try{
    res.status(200).json({
        contact:contacts
    })
}
catch(error)
{
console.log(error.message)
res.status(500).json({
    message:"Internal server Error"
})
}
},
GetbyEmail:async(req,res)=>
{
    const phone1=req.params.phone
    const contacts=await contactModel.findOne({phone:phone1})
try{
    res.status(200).json({
        contact:contacts
    })
}
catch(error)
{
console.log(error.message)
res.status(500).json({
    message:"Internal server Error"
})
}
},
Updatecontact:async(req,res)=>
{
    const updatedcontact=await contactModel.findByIdAndUpdate(req.params.id,req.body,{set:true})
try{
    res.status(200).json({
        message:'updated successfully',
        contact:updatedcontact
    })
}
catch(error)
{
console.log(error.message)
res.status(500).json({
    message:"Internal server Error"
})
}
},
Delete:async(req,res)=>
{
    const deletedcontacts=await contactModel.findByIdAndDelete(req.params.id)
try{
    res.status(200).json({
        message:'deleted successfully',
        contact:deletedcontacts
    })
}
catch(error)
{
console.log(error.message)
res.status(500).json({
    message:"Internal server Error"
})
}
}
}
export default contactController;

