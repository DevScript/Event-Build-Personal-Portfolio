import axios from 'axios';

const emailSender = (name, email) => {
    axios.get(
        `https://us-central1-portfolio-525a9.cloudfunctions.net/sendMail?name=${name}&dest=${email}`
    );
};

export default emailSender;