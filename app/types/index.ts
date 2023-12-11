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

type ProjectList = Project[];
