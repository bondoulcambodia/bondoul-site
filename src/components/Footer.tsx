import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTiktok,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Bondoul</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              We bring people and opportunities together, from jobs and
              internships to talent connections, events, and more. Whether you
              are growing your career or building your team, Bondoul is here to
              support your journey.
            </p>
            <p className="text-sm text-muted-foreground">
              We are currently in MVP development stage.
            </p>
          </div>

          <div className="">
            <h4 className="font-semibold text-foreground mb-4">
              Follow/Contact Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://t.me/bondoul_internship"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <IconBrandTelegram />
              </a>
              <a
                href="https://www.facebook.com/share/1FTgL5zf8P/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <IconBrandLinkedin />
              </a>
              <a
                href="https://www.facebook.com/share/1FTgL5zf8P/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <IconBrandFacebook />
              </a>
              <a
                href="https://www.tiktok.com/@bondoulinternship?_t=ZS-8ybFxwMQM8z&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <IconBrandTiktok />
              </a>
            </div>
          </div>

          <div className="overflow-clip">
            <h4 className="font-semibold text-foreground mb-4">Location</h4>
            <ul className="space-y-2 text-muted-foreground">
              {/* <li>
                <a
                  href="mailto:bondoulcambodia@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  bondoulcambodia@gmail.com
                </a>
              </li> */}
              <li>
                <p>Phnom Penh, Cambodia</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Bondoul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
