import { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  FileText,
  Send,
  Copy,
  Check,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import ShinyText from "@/components/react-bits/ShinyText";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const socialLinks = [
  { icon: Github, href: profile.social.github, label: "GitHub" },
  { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
  { icon: Send, href: profile.social.telegram, label: "Telegram" },
];

export function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success(t("contact.emailCopied"));
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback to mailto if clipboard fails
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const text = `📬 New Portfolio Message\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email || "Not provided"}\n\n💬 Message:\n${formData.message}`;

      const response = await fetch(
        `https://api.telegram.org/bot${profile.telegram.botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: profile.telegram.chatId,
            text,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        toast.success(t("contact.form.success"));
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      toast.error(t("contact.form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Availability Badge */}
          {profile.availableForWork && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                {t("contact.availableForWork")}
              </span>
            </motion.div>
          )}

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <ShinyText
              text={t("contact.title")}
              speed={3}
              color="#a1a1aa"
              shineColor="#ffffff"
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6 mb-12"
          >
            {/* Email - Click to Copy */}
            <motion.button
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/30 transition-all text-left group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  {t("contact.email")}
                  <span className="text-xs opacity-60">
                    ({t("contact.clickToCopy")})
                  </span>
                </p>
                <p className="text-foreground font-medium truncate">
                  {profile.email}
                </p>
              </div>
              <div className="text-muted-foreground group-hover:text-primary transition-colors">
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </div>
            </motion.button>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t("contact.location")}
                </p>
                <p className="text-foreground font-medium">{profile.location}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Telegram Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-center text-muted-foreground mb-6">
              {t("contact.orSendMessage")}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.form.name")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t("contact.form.namePlaceholder")}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t("contact.form.emailPlaceholder")}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact.form.message")} *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                />
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="min-w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      {t("contact.form.send")}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="mr-2" size={18} />
                {t("contact.sendEmail")}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2" size={18} />
                {t("contact.downloadResume")}
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
