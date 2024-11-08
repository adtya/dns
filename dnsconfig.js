// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

var REG_DYNADOT = NewRegistrar("dynadot");
var DNSP_HETZNER = NewDnsProvider("hetzner");

D("adtya.xyz", REG_DYNADOT, DnsProvider(DNSP_HETZNER),
    DefaultTTL("900s"),
    A("@", "165.232.180.97"),
    CNAME("if3", "if3.fly.dev."),
    CNAME("proofs", "adtya.xyz."),
    CNAME("wiki", "adtya.xyz."),
    CNAME("www", "adtya.xyz."),
    TXT("_github-pages-challenge-adtya", "c83b7cfc33c02c0499d401da51b801"),
    END);

D("acomputer.lol", REG_DYNADOT, DnsProvider(DNSP_HETZNER),
    DefaultTTL("900s"),
    A("@", "165.232.180.97"),
    CNAME("forge", "acomputer.lol."),
    CNAME("matrix", "acomputer.lol."),
    CNAME("ntfy", "acomputer.lol."),
    CNAME("proxy", "acomputer.lol."),
    CNAME("www", "acomputer.lol."),
    END);

D("ironyofprivacy.org", REG_DYNADOT, DnsProvider(DNSP_HETZNER),
    DefaultTTL("900s"),
    END);

function SETUP_FASTMAIL(domain) {
  D_EXTEND(domain,
    DefaultTTL("1d"),
    MX("@", 10, "in1-smtp.messagingengine.com."),
    MX("@", 20, "in2-smtp.messagingengine.com."),
    CNAME("mesmtp._domainkey", "mesmtp." + domain + ".dkim.fmhosted.com."),
    CNAME("fm1._domainkey", "fm1." + domain + ".dkim.fmhosted.com."),
    CNAME("fm2._domainkey", "fm2." + domain + ".dkim.fmhosted.com."),
    CNAME("fm3._domainkey", "fm3." + domain + ".dkim.fmhosted.com."),
    SRV("_submission._tcp", 0, 0, 0, "."),
    SRV("_imap._tcp", 0, 0, 0, "."),
    SRV("_pop3._tcp", 0, 0, 0, "."),
    SRV("_submissions._tcp", 0, 1, 465, "smtp.fastmail.com."),
    SRV("_imaps._tcp", 0, 1, 993, "imap.fastmail.com."),
    SRV("_pop3s._tcp", 10, 1, 995, "pop.fastmail.com."),
    SRV("_jmap._tcp", 0, 1, 443, "api.fastmail.com."),
    SRV("_autodiscover._tcp", 0, 1, 443, "autodiscover.fastmail.com."),
    SRV("_carddav._tcp", 0, 0, 0, "."),
    SRV("_carddavs._tcp", 0, 1, 443, "carddav.fastmail.com."),
    SRV("_caldav._tcp", 0, 0, 0, "."),
    SRV("_caldavs._tcp", 0, 1, 443, "caldav.fastmail.com."),
    TXT("@", "v=spf1 include:spf.messagingengine.com ?all"),
    TXT("_dmarc", "v=DMARC1; p=none;"),
  END);
}

SETUP_FASTMAIL("adtya.xyz")
SETUP_FASTMAIL("acomputer.lol")
SETUP_FASTMAIL("ironyofprivacy.org")

