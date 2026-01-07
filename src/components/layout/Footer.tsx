import { useTranslation } from "react-i18next";
import { profile } from "@/data/profile";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} {profile.name}. {t("footer.rights")}
          </p>
          <p className="text-muted-foreground text-sm">
            {t("footer.builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
