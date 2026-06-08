import Resume from "../models/resume.model.js";

export const getCV = async (req, res) => {
  try {
    const resume = await Resume.findOne({ userId: req.params.userId });
    if (!resume) {
      return res.status(404).json({ message: "No CV data found." });
    }
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const upsertCV = async (req, res) => {
  const { userId, personalInfo, summary, experience, education, skills } =
    req.body;

  if (!userId || !personalInfo?.fullName || !personalInfo?.email) {
    return res
      .status(400)
      .json({ message: "UserId, Full Name, and Email are required." });
  }

  try {
    const updatedResume = await Resume.findOneAndUpdate(
      { userId },
      { personalInfo, summary, experience, education, skills },
      { new: true, upsert: true, runValidators: true },
    );
    res
      .status(200)
      .json({ message: "CV saved successfully!", data: updatedResume });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
