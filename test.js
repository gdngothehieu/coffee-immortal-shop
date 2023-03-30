const axios = require("axios");

for (let i = 0; i <= 10000; i++) {
  axios
    .post("https://ats.workatsea.com/ats/api/v1/user/job/apply/", {
      job_id: "J00222599",
      channel_id: "10001",
      channel_name: "",
      first_name: "Hieu",
      last_name: "The",
      company: "E-commerce",
      designation: "N.A",
      country_code: "84",
      contact_number: "0338934743",
      email: "ngothehieusan@gmail.com",
      location_id: "305",
      location_name: "",
      website: "https://www.linkedin.com/in/the-hieu-ngo-b2a690219/",
      original_resume_file_uuid: "2ff521f1cdd111ed94fc728a02dc54c0",
      preview_resume_file_uuid: "2ff521f1cdd111ed94fc728a02dc54c0",
      transcript_file_uuid: "f8fb070fcdd011ed94fc728a02dc54c0",
      preview_transcript_file_uuid: "f8fb070fcdd011ed94fc728a02dc54c0",
      course_end: 1564592400,
      course_start: 1475254800,
      highest_education_id: "5119257002",
      highest_education_name: "",
      graduated_school_id: "5118745002",
      graduated_school_name: "",
      course_id: "5119279002",
      course_name: "",
      sources: [
        {
          sourceId: "careers_site",
          sourceName: "",
        },
      ],
      intern_period_start: 0,
      intern_period_end: 0,
      application_form_id: 4,
    })
    .then(function (response) {
      console.log("abc");
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
