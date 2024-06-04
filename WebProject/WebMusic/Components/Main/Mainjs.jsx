const [job, setJob] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSubmit = () => {
    setJobs(prev => [...prev, job]);
    setJob(''); 
  };

  const handleDelete = (index) => {
    const newJobs = [...jobs]; // Tạo một bản sao của mảng jobs
    newJobs.splice(index, 1); // Loại bỏ một phần tử tại vị trí index
    setJobs(newJobs); // Cập nhật state với mảng mới
  };