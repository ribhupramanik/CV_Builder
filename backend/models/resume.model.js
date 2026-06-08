import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  location: String,
  startDate: String,
  endDate: String,
  current: { type: Boolean, default: false },
  description: [{ type: String }],
});

const EducationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: String,
  graduationDate: String,
  location: String,
});

const ResumeSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },
    personalInfo: {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      phone: String,
      linkedin: String,
      portfolio: String,
    },
    summary: String,
    experience: [ExperienceSchema],
    education: [EducationSchema],
    skills: [{ type: String }],
  },
  { timestamps: true },
);

const Resume = mongoose.model("Resume", ResumeSchema);

export default Resume;
