import React, { useRef, useState } from "react";
import Layout from "../components/layout";
import Reaptcha from "reaptcha";
import axios from 'axios';
import Swal from 'sweetalert2'
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
// import TagFacesIcon from '@mui/icons-material/TagFaces';


const countries = [
  'Netherlands' ,'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla',
  'Antigua & Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria',
  'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus',
  'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina',
  'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso',
  'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands',
  'Central Arfrican Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Congo',
  'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cuba', 'Curacao',
  'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
  'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia',
  'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France',
  'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia',
  'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam',
  'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti',
  'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran',
  'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan',
  'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait',
  'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
  'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar',
  'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
  'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
  'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauro', 'Nepal',
  'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger',
  'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine',
  'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
  'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda',
  'Saint Pierre & Miquelon', 'Samoa', 'San Marino', 'Sao Tome and Principe',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
  'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
  'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'St Kitts & Nevis',
  'St Lucia', 'St Vincent', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland',
  'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
  'Turks & Caicos', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
  'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
  'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe']

  const categoryList = [
    'select',
    'Adventure',
    'Agrarian Skies',
    'Annihilation',
    'Attack Of The B-Team',
    'BedWars',
    'Big Dig',
    'Blocks Vs Zombies'
  ]

  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

const AddServer = () => {
    const [captchaToken, setCaptchaToken] = useState(null);
    const captchaRef = useRef(null);
    const [username, setUsername] = useState('server1');
    const [name, setName] = useState('');
    const [ip, setIp] = useState('');
    const [website, setWebsite] = useState('');
    const [category, setCategory] = useState('Adventure');
    const [contry, setContry] = useState('Netherlands');
    const [youtubeVideo, setYoutubeVideo] = useState('');
    const [description, setDescription] = useState('');
    const [banner, setBanner] = useState(null);
    const [isVotified, setIsVotified] = useState(false);
    const [serverCreated, setServerCreated] = useState(false);
    const [chipData, setChipData] = React.useState([
      'Adventure'
    ]);
    const handleDelete = (chipToDelete) => () => {
      setCategory('')
      setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    async function createServer(formData) {
      try {
          const response = await axios.post('http://localhost:3002/v1/servers/add', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
          if (response.data.success) {
              return true;
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
              throw new Error(response.data.message);
          }
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
          console.error(err);
          return false;
      }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('banner', banner);
    formData.append('username', username);
    formData.append('name', name);
    formData.append('ip', ip);
    formData.append('website', website);
    formData.append('category', `${chipData}`);
    formData.append('contry', contry);
    formData.append('youtubeVideo', youtubeVideo);
    formData.append('description', description);

    const success = await createServer(formData);
    console.log(success)
    if (success) {
      setServerCreated(true);
      setName('');
      setIp('');
      setWebsite('');
      setCategory('');
      setContry('');
      setYoutubeVideo('');
      setDescription('');
      setBanner(null);
      setServerCreated(true);
      Swal.fire({
        icon: 'success',
        title: 'Server created successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
}


  const verify = () => {
    // captchaRef.current.getResponse().then((res) => {
    //   setCaptchaToken(res);
    // });
  };
  const handleBannerChange = (e) => {
    setBanner(e.target.files[0]);
}
 


  return (
    <Layout>
      <div className=" md:w-9/12 w-11/12 mx-auto mb-5">
        <h1 className="text-black text-4xl mt-10 font-thin mb-6">Add Server</h1>
        <hr />
        <div className="md:w-8/12 mx-auto mt-10 bg-gray-100 px-4 py-4 border">
          <h1 className="text-black text-2xl  mb-3">Server Setup</h1>
          <hr className="bg-gray-300" />
          <div className=" bg-[#9954BB] p-5 mt-5 text-white">
            <p >
              Please do not add servers if you are not the owner/admin. If
              you're having any problems, feel free to contact us.
            </p>
            <hr className="bg-purple-900 my-5 h-[0.7px] border-0" />
            <p >
              ⚠️ We DO NOT accept free hosted servers like Aternos, ServerPro,
              Minehut, Freemcserver, FalixNodes, etc...
            </p>
            <hr className="bg-purple-900 my-5 h-[0.7px] border-0" />
            <p>
              Adding your server multiple times under different IP's IS NOT
              allowed and will likely be deleted without notice.
            </p>
          </div>
          <div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">Name</label>
              <input
                type="text"
                name="name" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                placeholder="Name"
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">IP Adress</label>
              <input
                type="text"
                name="ip" 
                value={ip} 
                onChange={e => setIp(e.target.value)} 
                placeholder="IP"
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <div className="mt-8">
            <label className="text-black font-bold text-sm">
                Categories/Tag (At Least 1 REQUIRED! )
            </label>
            <select 
              value={category} 
              placeholder="category"
              className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              onChange={e => {
                setCategory(e.target.value)
                setChipData([...chipData,e.target.value])

                }}>
                {categoryList.map((category, i) => (
                  chipData.includes(category)?
                  
                    <option key={i} value={category} disabled>{category}</option>
                  :
                    <option key={i} value={category} >{category}</option>
                ))}
            </select>
            <Paper
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  listStyle: 'none',
                  p: 0.5,
                  m: 0,
                }}
                component="ul"
              >
                {chipData.map((data,i) => {
                  return (
                    <ListItem key={i}>
                      <Chip
                        label={data}
                        onDelete={handleDelete(data)}
                      />
                    </ListItem>
                  );
                })}
              </Paper>
             
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">Country</label>
              <select 
              value={contry} 
              placeholder="Country"
              className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              onChange={e => setContry(e.target.value)}>
                {countries.map((country, i) => (
                    <option key={i} value={country}>{country}</option>
                ))}
            </select>
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">Website</label>
              <input
                type="text"
                ame="website" 
                value={website}
                 onChange={e => setWebsite(e.target.value)} 
                 placeholder="Website"
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">
                Banner (Optional)
              </label>
              <input type="file" 
              onChange={handleBannerChange}  
              accept="image/*" 
              placeholder="Banner"
              className="p-2 w-full text-black  mt-1" />
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">
                Youtube Video
              </label>
              <input
                type="text"
                name="youtubeVideo" 
                value={youtubeVideo} 
                onChange={e => setYoutubeVideo(e.target.value)} 
                placeholder="Youtube Video"
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <div className="mt-8">
              <label className="text-black font-bold text-sm">
                Description (REQUIRED!)
              </label>
              <textarea
                type="text"
                name="description"
                value={description} 
                onChange={e => setDescription(e.target.value)} 
                placeholder="Description"
                rows={5}
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            {/* <form>
              <Reaptcha
                sitekey="6LdBugEkAAAAAA1uMkOS6Zd-9S1BsAJ5jZejapBN"
                ref={captchaRef}
                onVerify={verify}
              />
            </form> */}
          </div>
          <button
          className="p-2 w-full border-[0.7px] border-gray-300 mt-1 bg-[#1967be] text-white"
          
          onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </Layout>
  );
};
export default AddServer;
