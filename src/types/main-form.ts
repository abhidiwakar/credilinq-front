type MainFormInput = {
  companyInfo: {
    name: string;
    uen: string;
  };
  applicantInfo: {
    fullName: string;
    position: string;
    email: string;
    reEmail: string;
    mobile: string;
  };
  documents: string[];
  tnc: boolean;
};

export default MainFormInput;
