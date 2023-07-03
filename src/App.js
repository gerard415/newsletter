import { useState } from "react";


function App() {
  const [email, setEmail] = useState('')

  const setChange = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }



  return (
    <div className="   md:h-screen md:flex justify-between p-5 text-center font-nunito ml-2 mr-2 sm: ">
      <div className=" flex flex-col space-y-10 max-w-[630px]  items-center justify-center text-center  ">
        <span className="text-[70px] ">Hey, there... </span>
        <span className="text-[20px]">Want to be the first to try our new app that promotes your business,  get access to important information and exclusive content?</span>
        <span className="text-[20px] text-red-600">Subscribe to our newsletter!</span>
        <div>
          <form action="" method="post">
            <input className="bg-gray-200 w-[300px] rounded-l-lg p-2" type="text" name="email" id="" placeholder="email@example.com" value={email} onChange={(e) => setChange(e)}/>
            <button className="bg-red-500 w-[120px] p-2 rounded-r-lg text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-[630px]  h-[600px] rounded-3xl" src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
    </div>
  );
}

export default App;
