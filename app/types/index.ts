type Project = {
  title: string;
  category: string;
  skills: string[];
  live_link: string | null;
  github_link: string;
  redirect_link: string;
  image_url: string;
  warning: string | null;
  color: string;
};

type ProjectFull = {
  title: string;
  category: string;
  skills: string[];
  live_link: string | null;
  github_link: string;
  image_url: string;
  overview: string[];
  features: string[];
  challenges: string;
  results: string;
  warning: string | null;
};

type ProjectList = Project[];

type Experience = {
  title: string;
  timeframe: string;
  company: string;
  description: string;
};

type ExperienceList = Experience[];
