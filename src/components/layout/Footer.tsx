import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/ui/section-container";

export function Footer() {
    return (
        <footer className="w-full bg-background border-t border-border/40 pt-16 pb-8">
            <SectionContainer>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
                            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-lg">V</div>
                            <span>{siteConfig.name}</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Your trusted partner in global immigration and visa solutions. Simplifying complex processes for individuals and businesses.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-semibold text-foreground">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services/visas" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Visa Applications</Link></li>
                            <li><Link href="/services/waivers" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Waivers & Appeals</Link></li>
                            <li><Link href="/services/corporate" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Corporate Immigration</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-semibold text-foreground">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/book" className="text-muted-foreground hover:text-primary transition-colors">Book Consultation</Link></li>
                            <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="font-semibold text-foreground">Contact</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <Phone className="h-4 w-4 mt-1 shrink-0 text-primary" />
                                <span>{siteConfig.contact.phone.join(" / ")}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="h-4 w-4 mt-1 shrink-0 text-primary" />
                                <span>{siteConfig.contact.email[0]}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-1 shrink-0 text-primary" />
                                <span>{siteConfig.contact.address}</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 pt-2">
                            <Link href={siteConfig.links.twitter} className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Facebook className="h-4 w-4" /></Link>
                            <Link href={siteConfig.links.github} className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Linkedin className="h-4 w-4" /></Link>
                            <Link href="#" className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Instagram className="h-4 w-4" /></Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </SectionContainer>
        </footer>
    );
}
