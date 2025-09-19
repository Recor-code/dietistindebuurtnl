--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (63f4182)
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: blog_posts; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.blog_posts (
    id integer NOT NULL,
    title character varying(300) NOT NULL,
    slug character varying(300) NOT NULL,
    content text NOT NULL,
    excerpt text,
    meta_description character varying(160),
    city_id integer,
    province character varying(100),
    tags text,
    published_at timestamp without time zone,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.blog_posts OWNER TO neondb_owner;

--
-- Name: blog_posts_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.blog_posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.blog_posts_id_seq OWNER TO neondb_owner;

--
-- Name: blog_posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.blog_posts_id_seq OWNED BY public.blog_posts.id;


--
-- Name: chat_conversations; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.chat_conversations (
    id integer NOT NULL,
    session_id character varying(100) NOT NULL,
    messages text,
    analysis text,
    pain_points text,
    recommendations text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.chat_conversations OWNER TO neondb_owner;

--
-- Name: chat_conversations_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.chat_conversations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chat_conversations_id_seq OWNER TO neondb_owner;

--
-- Name: chat_conversations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.chat_conversations_id_seq OWNED BY public.chat_conversations.id;


--
-- Name: cities; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    slug character varying(100) NOT NULL,
    province character varying(100) NOT NULL,
    country character varying(2) NOT NULL,
    population integer,
    latitude numeric(10,8),
    longitude numeric(11,8),
    adhd_stats text,
    tldr text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.cities OWNER TO neondb_owner;

--
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cities_id_seq OWNER TO neondb_owner;

--
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- Name: coaches; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.coaches (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    slug character varying(200) NOT NULL,
    email character varying(200),
    phone character varying(50),
    website character varying(300),
    specialization text,
    description text,
    address text,
    latitude numeric(10,8),
    longitude numeric(11,8),
    city_id integer,
    rating numeric(3,2),
    review_count integer DEFAULT 0,
    is_child_friendly boolean DEFAULT false,
    weekend_available boolean DEFAULT false,
    online_available boolean DEFAULT false,
    in_person_available boolean DEFAULT true,
    accepts_insurance boolean DEFAULT false,
    availability_status character varying(50) DEFAULT 'available'::character varying,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.coaches OWNER TO neondb_owner;

--
-- Name: coaches_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.coaches_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.coaches_id_seq OWNER TO neondb_owner;

--
-- Name: coaches_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.coaches_id_seq OWNED BY public.coaches.id;


--
-- Name: faq_items; Type: TABLE; Schema: public; Owner: neondb_owner
--

CREATE TABLE public.faq_items (
    id integer NOT NULL,
    question text NOT NULL,
    answer text NOT NULL,
    category character varying(100),
    "order" integer DEFAULT 0,
    is_published boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.faq_items OWNER TO neondb_owner;

--
-- Name: faq_items_id_seq; Type: SEQUENCE; Schema: public; Owner: neondb_owner
--

CREATE SEQUENCE public.faq_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.faq_items_id_seq OWNER TO neondb_owner;

--
-- Name: faq_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neondb_owner
--

ALTER SEQUENCE public.faq_items_id_seq OWNED BY public.faq_items.id;


--
-- Name: blog_posts id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.blog_posts ALTER COLUMN id SET DEFAULT nextval('public.blog_posts_id_seq'::regclass);


--
-- Name: chat_conversations id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.chat_conversations ALTER COLUMN id SET DEFAULT nextval('public.chat_conversations_id_seq'::regclass);


--
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- Name: coaches id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.coaches ALTER COLUMN id SET DEFAULT nextval('public.coaches_id_seq'::regclass);


--
-- Name: faq_items id; Type: DEFAULT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.faq_items ALTER COLUMN id SET DEFAULT nextval('public.faq_items_id_seq'::regclass);


--
-- Data for Name: blog_posts; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.blog_posts (id, title, slug, content, excerpt, meta_description, city_id, province, tags, published_at, created_at, updated_at) FROM stdin;
1	ADHD Coaching in Amsterdam: Wat Je Moet Weten	adhd-coaching-amsterdam	<h2>ADHD Coaching in Amsterdam</h2><p>Ben je op zoek naar ADHD coaching in Amsterdam? In dit artikel bespreken we alles wat je moet weten over ADHD ondersteuning in jouw stad.</p><h3>Beschikbare ADHD Coaches</h3><p>In Amsterdam zijn verschillende ervaren ADHD coaches actief die je kunnen helpen met praktische vaardigheden...</p>	Ontdek alles over ADHD coaching mogelijkheden in Amsterdam. Van lokale coaches tot specialisaties.	ADHD coaching in Amsterdam - Vind ervaren coaches, bekijk reviews en vergelijk specialisaties in jouw stad.	1	Noord-Holland	["ADHD","coaching","Amsterdam","Noord-Holland"]	2025-09-19 14:31:52.798	2025-09-19 14:31:52.833756	2025-09-19 14:31:52.833756
2	ADHD Coaching in Rotterdam: Wat Je Moet Weten	adhd-coaching-rotterdam	<h2>ADHD Coaching in Rotterdam</h2><p>Ben je op zoek naar ADHD coaching in Rotterdam? In dit artikel bespreken we alles wat je moet weten over ADHD ondersteuning in jouw stad.</p><h3>Beschikbare ADHD Coaches</h3><p>In Rotterdam zijn verschillende ervaren ADHD coaches actief die je kunnen helpen met praktische vaardigheden...</p>	Ontdek alles over ADHD coaching mogelijkheden in Rotterdam. Van lokale coaches tot specialisaties.	ADHD coaching in Rotterdam - Vind ervaren coaches, bekijk reviews en vergelijk specialisaties in jouw stad.	2	Zuid-Holland	["ADHD","coaching","Rotterdam","Zuid-Holland"]	2025-09-19 14:31:52.798	2025-09-19 14:31:52.833756	2025-09-19 14:31:52.833756
3	ADHD Coaching in Den Haag: Wat Je Moet Weten	adhd-coaching-den-haag	<h2>ADHD Coaching in Den Haag</h2><p>Ben je op zoek naar ADHD coaching in Den Haag? In dit artikel bespreken we alles wat je moet weten over ADHD ondersteuning in jouw stad.</p><h3>Beschikbare ADHD Coaches</h3><p>In Den Haag zijn verschillende ervaren ADHD coaches actief die je kunnen helpen met praktische vaardigheden...</p>	Ontdek alles over ADHD coaching mogelijkheden in Den Haag. Van lokale coaches tot specialisaties.	ADHD coaching in Den Haag - Vind ervaren coaches, bekijk reviews en vergelijk specialisaties in jouw stad.	3	Zuid-Holland	["ADHD","coaching","Den Haag","Zuid-Holland"]	2025-09-19 14:31:52.798	2025-09-19 14:31:52.833756	2025-09-19 14:31:52.833756
4	ADHD Coaching in Utrecht: Wat Je Moet Weten	adhd-coaching-utrecht	<h2>ADHD Coaching in Utrecht</h2><p>Ben je op zoek naar ADHD coaching in Utrecht? In dit artikel bespreken we alles wat je moet weten over ADHD ondersteuning in jouw stad.</p><h3>Beschikbare ADHD Coaches</h3><p>In Utrecht zijn verschillende ervaren ADHD coaches actief die je kunnen helpen met praktische vaardigheden...</p>	Ontdek alles over ADHD coaching mogelijkheden in Utrecht. Van lokale coaches tot specialisaties.	ADHD coaching in Utrecht - Vind ervaren coaches, bekijk reviews en vergelijk specialisaties in jouw stad.	4	Utrecht	["ADHD","coaching","Utrecht","Utrecht"]	2025-09-19 14:31:52.798	2025-09-19 14:31:52.833756	2025-09-19 14:31:52.833756
5	ADHD Coaching in Eindhoven: Wat Je Moet Weten	adhd-coaching-eindhoven	<h2>ADHD Coaching in Eindhoven</h2><p>Ben je op zoek naar ADHD coaching in Eindhoven? In dit artikel bespreken we alles wat je moet weten over ADHD ondersteuning in jouw stad.</p><h3>Beschikbare ADHD Coaches</h3><p>In Eindhoven zijn verschillende ervaren ADHD coaches actief die je kunnen helpen met praktische vaardigheden...</p>	Ontdek alles over ADHD coaching mogelijkheden in Eindhoven. Van lokale coaches tot specialisaties.	ADHD coaching in Eindhoven - Vind ervaren coaches, bekijk reviews en vergelijk specialisaties in jouw stad.	5	Noord-Brabant	["ADHD","coaching","Eindhoven","Noord-Brabant"]	2025-09-19 14:31:52.798	2025-09-19 14:31:52.833756	2025-09-19 14:31:52.833756
6	ADHD Coaching in Groningen: Wat Je Moet Weten	adhd-coaching-groningen	<h2>ADHD Coaching in Groningen</h2><p>Ben je op zoek naar ADHD coaching in Groningen? In dit artikel bespreken we alles wat je moet weten over ADHD ondersteuning in jouw stad.</p><h3>Beschikbare ADHD Coaches</h3><p>In Groningen zijn verschillende ervaren ADHD coaches actief die je kunnen helpen met praktische vaardigheden...</p>	Ontdek alles over ADHD coaching mogelijkheden in Groningen. Van lokale coaches tot specialisaties.	ADHD coaching in Groningen - Vind ervaren coaches, bekijk reviews en vergelijk specialisaties in jouw stad.	6	Groningen	["ADHD","coaching","Groningen","Groningen"]	2025-09-19 14:31:52.798	2025-09-19 14:31:52.833756	2025-09-19 14:31:52.833756
7	ADHD Coaching in Tilburg: Wat Je Moet Weten	adhd-coaching-tilburg	<h2>ADHD Coaching in Tilburg</h2><p>Ben je op zoek naar ADHD coaching in Tilburg? In dit artikel bespreken we alles wat je moet weten over ADHD ondersteuning in jouw stad.</p><h3>Beschikbare ADHD Coaches</h3><p>In Tilburg zijn verschillende ervaren ADHD coaches actief die je kunnen helpen met praktische vaardigheden...</p>	Ontdek alles over ADHD coaching mogelijkheden in Tilburg. Van lokale coaches tot specialisaties.	ADHD coaching in Tilburg - Vind ervaren coaches, bekijk reviews en vergelijk specialisaties in jouw stad.	7	Noord-Brabant	["ADHD","coaching","Tilburg","Noord-Brabant"]	2025-09-19 14:31:52.798	2025-09-19 14:31:52.833756	2025-09-19 14:31:52.833756
8	ADHD Coaching in Almere: Wat Je Moet Weten	adhd-coaching-almere	<h2>ADHD Coaching in Almere</h2><p>Ben je op zoek naar ADHD coaching in Almere? In dit artikel bespreken we alles wat je moet weten over ADHD ondersteuning in jouw stad.</p><h3>Beschikbare ADHD Coaches</h3><p>In Almere zijn verschillende ervaren ADHD coaches actief die je kunnen helpen met praktische vaardigheden...</p>	Ontdek alles over ADHD coaching mogelijkheden in Almere. Van lokale coaches tot specialisaties.	ADHD coaching in Almere - Vind ervaren coaches, bekijk reviews en vergelijk specialisaties in jouw stad.	8	Flevoland	["ADHD","coaching","Almere","Flevoland"]	2025-09-19 14:31:52.798	2025-09-19 14:31:52.833756	2025-09-19 14:31:52.833756
9	ADHD Coaching in Breda: Wat Je Moet Weten	adhd-coaching-breda	<h2>ADHD Coaching in Breda</h2><p>Ben je op zoek naar ADHD coaching in Breda? In dit artikel bespreken we alles wat je moet weten over ADHD ondersteuning in jouw stad.</p><h3>Beschikbare ADHD Coaches</h3><p>In Breda zijn verschillende ervaren ADHD coaches actief die je kunnen helpen met praktische vaardigheden...</p>	Ontdek alles over ADHD coaching mogelijkheden in Breda. Van lokale coaches tot specialisaties.	ADHD coaching in Breda - Vind ervaren coaches, bekijk reviews en vergelijk specialisaties in jouw stad.	9	Noord-Brabant	["ADHD","coaching","Breda","Noord-Brabant"]	2025-09-19 14:31:52.798	2025-09-19 14:31:52.833756	2025-09-19 14:31:52.833756
10	ADHD Coaching in Nijmegen: Wat Je Moet Weten	adhd-coaching-nijmegen	<h2>ADHD Coaching in Nijmegen</h2><p>Ben je op zoek naar ADHD coaching in Nijmegen? In dit artikel bespreken we alles wat je moet weten over ADHD ondersteuning in jouw stad.</p><h3>Beschikbare ADHD Coaches</h3><p>In Nijmegen zijn verschillende ervaren ADHD coaches actief die je kunnen helpen met praktische vaardigheden...</p>	Ontdek alles over ADHD coaching mogelijkheden in Nijmegen. Van lokale coaches tot specialisaties.	ADHD coaching in Nijmegen - Vind ervaren coaches, bekijk reviews en vergelijk specialisaties in jouw stad.	10	Gelderland	["ADHD","coaching","Nijmegen","Gelderland"]	2025-09-19 14:31:52.799	2025-09-19 14:31:52.833756	2025-09-19 14:31:52.833756
\.


--
-- Data for Name: chat_conversations; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.chat_conversations (id, session_id, messages, analysis, pain_points, recommendations, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.cities (id, name, slug, province, country, population, latitude, longitude, adhd_stats, tldr, created_at, updated_at) FROM stdin;
1	Amsterdam	amsterdam	Noord-Holland	NL	907976	52.36760000	4.90410000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.731Z"}	Professionele ADHD ondersteuning in Amsterdam. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
2	Rotterdam	rotterdam	Zuid-Holland	NL	651446	51.92440000	4.47770000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.731Z"}	ADHD hulp in Rotterdam: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
3	Den Haag	den-haag	Zuid-Holland	NL	548320	52.07050000	4.30070000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.731Z"}	ADHD hulp in Den Haag: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
4	Utrecht	utrecht	Utrecht	NL	361966	52.09070000	5.12140000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.731Z"}	Professionele ADHD ondersteuning in Utrecht. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
5	Eindhoven	eindhoven	Noord-Brabant	NL	238326	51.44160000	5.46970000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.731Z"}	ADHD hulp in Eindhoven: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
6	Groningen	groningen	Groningen	NL	233218	53.21940000	6.56650000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.731Z"}	ADHD coach zoeken in Groningen? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
7	Tilburg	tilburg	Noord-Brabant	NL	219800	51.55550000	5.09130000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.731Z"}	ADHD coach zoeken in Tilburg? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
8	Almere	almere	Flevoland	NL	214715	52.35080000	5.26470000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.731Z"}	ADHD hulp in Almere: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
9	Breda	breda	Noord-Brabant	NL	184271	51.57190000	4.76830000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.731Z"}	ADHD hulp in Breda: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
10	Nijmegen	nijmegen	Gelderland	NL	179073	51.84260000	5.85180000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Nijmegen. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
11	Enschede	enschede	Overijssel	NL	159734	52.22150000	6.89370000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Enschede? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
12	Haarlem	haarlem	Noord-Holland	NL	162961	52.38730000	4.64620000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Haarlem: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
13	Arnhem	arnhem	Gelderland	NL	161368	51.98510000	5.89870000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Arnhem. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
14	Zaanstad	zaanstad	Noord-Holland	NL	156711	52.43910000	4.81700000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Zaanstad? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
15	Amersfoort	amersfoort	Utrecht	NL	158172	52.15610000	5.38780000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Amersfoort: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
16	's-Hertogenbosch	s-hertogenbosch	Noord-Brabant	NL	156793	51.69780000	5.30370000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in 's-Hertogenbosch. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
17	Apeldoorn	apeldoorn	Gelderland	NL	165525	52.21120000	5.96990000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Apeldoorn: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
18	Hoofddorp	hoofddorp	Noord-Holland	NL	76660	52.30300000	4.68900000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Hoofddorp? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
19	Maastricht	maastricht	Limburg	NL	121558	50.85140000	5.69100000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Maastricht. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
20	Leiden	leiden	Zuid-Holland	NL	125174	52.16010000	4.49700000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Leiden: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
21	Dordrecht	dordrecht	Zuid-Holland	NL	119300	51.81330000	4.69000000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Dordrecht. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
22	Zoetermeer	zoetermeer	Zuid-Holland	NL	125283	52.05750000	4.49330000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Zoetermeer. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
23	Zwolle	zwolle	Overijssel	NL	130592	52.51680000	6.08300000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Zwolle? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
24	Deventer	deventer	Overijssel	NL	100718	52.25510000	6.16390000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Deventer? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
25	Delft	delft	Zuid-Holland	NL	103659	52.01160000	4.35710000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Delft. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
26	Alkmaar	alkmaar	Noord-Holland	NL	109896	52.63260000	4.74820000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Alkmaar? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
27	Leeuwarden	leeuwarden	Friesland	NL	123107	53.20120000	5.80860000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Leeuwarden? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
28	Sittard-Geleen	sittard-geleen	Limburg	NL	92422	50.99790000	5.85620000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Sittard-Geleen. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
29	Venlo	venlo	Limburg	NL	101797	51.37040000	6.17240000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Venlo? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
30	Hilversum	hilversum	Noord-Holland	NL	92407	52.22420000	5.17580000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Hilversum: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
31	Roosendaal	roosendaal	Noord-Brabant	NL	77226	51.53080000	4.46530000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Roosendaal? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
32	Purmerend	purmerend	Noord-Holland	NL	81233	52.50510000	4.95920000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Purmerend: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
33	Oss	oss	Noord-Brabant	NL	91932	51.76590000	5.51530000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Oss. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
34	Schiedam	schiedam	Zuid-Holland	NL	77999	51.92000000	4.38970000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Schiedam: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
35	Spijkenisse	spijkenisse	Zuid-Holland	NL	74988	51.84470000	4.32890000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Spijkenisse: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
36	Brussel	brussel	Brussels Hoofdstedelijk Gewest	BE	1218255	50.85030000	4.35170000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Brussel. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
37	Antwerpen	antwerpen	Antwerpen	BE	529247	51.21940000	4.40250000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Antwerpen: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
38	Gent	gent	Oost-Vlaanderen	BE	262219	51.05000000	3.73030000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Gent: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
39	Charleroi	charleroi	Henegouwen	BE	201816	50.41080000	4.44460000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Charleroi: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
40	Luik	luik	Luik	BE	197355	50.63260000	5.57970000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Luik: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
41	Brugge	brugge	West-Vlaanderen	BE	118284	51.20850000	3.22540000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Brugge? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
42	Namen	namen	Namen	BE	111300	50.46740000	4.87200000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Namen? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
43	Leuven	leuven	Vlaams-Brabant	BE	103000	50.87980000	4.70050000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD coach zoeken in Leuven? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
44	Bergen	bergen	Henegouwen	BE	93259	50.45410000	3.95170000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Bergen. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
45	Mechelen	mechelen	Antwerpen	BE	86921	51.02590000	4.47770000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Mechelen. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
46	Aalst	aalst	Oost-Vlaanderen	BE	85638	50.93680000	4.03970000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Aalst: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
47	La Louvière	la-louviere	Henegouwen	BE	79844	50.47920000	4.18780000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in La Louvière: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
48	Kortrijk	kortrijk	West-Vlaanderen	BE	76265	50.82810000	3.26480000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	Professionele ADHD ondersteuning in Kortrijk. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
49	Hasselt	hasselt	Limburg	BE	79073	50.93070000	5.33780000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Hasselt: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
50	Sint-Niklaas	sint-niklaas	Oost-Vlaanderen	BE	78549	51.16570000	4.14310000	{"prevalenceAdults":"4-6%","prevalenceChildren":"5-8%","waitingTimeAverageWeeks":12,"availableCoaches":0,"averageRating":4.2,"treatmentTypes":["ADHD Coaching","Gedragstherapie","Medicatie begeleiding","Psychoeducatie","Ouder/partner coaching"],"lastUpdated":"2025-09-19T14:31:51.732Z"}	ADHD hulp in Sint-Niklaas: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.	2025-09-19 14:31:52.411772	2025-09-19 14:31:52.411772
\.


--
-- Data for Name: coaches; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.coaches (id, name, slug, email, phone, website, specialization, description, address, latitude, longitude, city_id, rating, review_count, is_child_friendly, weekend_available, online_available, in_person_available, accepts_insurance, availability_status, created_at, updated_at) FROM stdin;
1	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	52.37249015	4.90135955	1	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
2	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	52.36821574	4.90646261	1	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
3	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	52.36274871	4.90665521	1	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
4	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	51.92693715	4.47365659	2	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
5	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	51.92228461	4.47781435	2	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
6	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	51.92651283	4.47972026	2	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
7	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	52.06804814	4.30070010	3	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
8	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	52.06937980	4.29738860	3	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
9	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	52.07524840	4.29780612	3	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
10	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	52.08742091	5.12011802	4	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
11	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	52.09555315	5.12238088	4	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
12	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	52.08679449	5.12469271	4	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
13	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	51.43684703	5.46916469	5	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
14	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	51.44163861	5.47030489	5	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
15	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	51.44272668	5.47311998	5	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
16	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	53.22305163	6.56899988	6	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
17	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	53.21929078	6.57075778	6	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
18	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	53.21459499	6.56217303	6	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
19	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	51.55819382	5.09176935	7	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
20	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	51.55497521	5.09105708	7	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
21	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	51.55652316	5.08887398	7	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
22	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	52.34961630	5.26394815	8	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
23	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	52.34717751	5.26626310	8	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
24	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	52.34826479	5.26648800	8	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
25	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	51.57614033	4.76519300	9	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
26	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	51.57421486	4.77125053	9	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
27	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	51.57647681	4.76359261	9	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
28	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	51.83883959	5.84907170	10	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
29	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	51.84246326	5.85541027	10	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
30	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	51.84555183	5.85119883	10	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
31	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	52.21658263	6.89483776	11	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
32	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	52.22332790	6.89123277	11	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
33	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	52.22457309	6.89319528	11	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
34	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	52.38643535	4.64152341	12	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
35	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	52.39189678	4.64464809	12	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
36	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	52.38524117	4.64480445	12	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
37	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	51.98958839	5.90021498	13	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
38	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	51.98362391	5.89626176	13	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
39	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	51.98591027	5.89667110	13	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
40	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	52.43449337	4.82101667	14	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
41	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	52.44264814	4.81926367	14	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
42	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	52.44068346	4.81667426	14	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
43	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	52.15831302	5.38339840	15	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
44	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	52.15650742	5.38840170	15	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
45	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	52.15927884	5.38672658	15	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
46	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	51.69917094	5.30822638	16	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
47	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	51.70058913	5.30418259	16	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
48	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	51.70083180	5.30224205	16	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
49	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	52.21208373	5.97449965	17	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
50	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	52.21059495	5.97175812	17	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
51	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	52.20659747	5.97340540	17	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
52	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	52.30160920	4.69336524	18	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
53	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	52.30451781	4.69251417	18	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
54	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	52.30662557	4.68737811	18	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
55	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	50.85574645	5.68877646	19	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
56	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	50.85146346	5.68851822	19	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
57	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	50.84904986	5.69043758	19	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
58	Dr. Sarah van den Berg	sarah-van-den-berg	sarah@adhdcoach.nl	06-12345678	https://sarahcoaching.nl	ADHD Coach & Psycholoog	Gespecialiseerd in ADHD coaching voor volwassenen. 15 jaar ervaring in gedragstherapie en coaching.	Hoofdstraat 123	52.15975842	4.50069653	20	4.80	47	t	t	t	t	t	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
59	Mark Jansen	mark-jansen	mark@focuscoaching.nl	06-87654321	\N	ADHD Coach	Focus en planningscoach met ADHD specialisatie. Helpt bij structuur en organisatie.	Parkweg 45	52.15828200	4.49995705	20	4.60	32	f	f	t	t	f	available	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
60	Lisa de Vries	lisa-de-vries	lisa@kindcoaching.nl	06-11223344	\N	Gedragstherapeut	Gedragstherapeut gespecialiseerd in ADHD bij kinderen en jongeren.	Schoolstraat 67	52.16207599	4.50177001	20	4.90	63	t	t	f	t	t	busy	2025-09-19 14:31:52.671257	2025-09-19 14:31:52.671257
\.


--
-- Data for Name: faq_items; Type: TABLE DATA; Schema: public; Owner: neondb_owner
--

COPY public.faq_items (id, question, answer, category, "order", is_published, created_at, updated_at) FROM stdin;
1	Wat is het verschil tussen een ADHD coach en een psycholoog?	Een ADHD coach richt zich vooral op praktische vaardigheden zoals planning, organisatie en tijdmanagement. Een psycholoog kan ook therapeutische behandeling bieden voor bijkomende problematiek zoals angst of depressie.	Algemeen	1	t	2025-09-19 14:31:52.752735	2025-09-19 14:31:52.752735
2	Wordt ADHD coaching vergoed door de zorgverzekering?	ADHD coaching wordt niet standaard vergoed vanuit de basisverzekering. Sommige aanvullende verzekeringen vergoeden wel een deel van de kosten. Check dit altijd bij je verzekeraar.	Vergoeding	2	t	2025-09-19 14:31:52.752735	2025-09-19 14:31:52.752735
3	Hoe lang duurt een ADHD coaching traject gemiddeld?	Een coaching traject duurt gemiddeld 3-6 maanden, afhankelijk van je doelen en voortgang. De meeste coaches werken met sessies van 45-60 minuten, 1x per week of om de week.	Proces	3	t	2025-09-19 14:31:52.752735	2025-09-19 14:31:52.752735
4	Kan ik online ADHD coaching krijgen?	Ja, veel ADHD coaches bieden ook online coaching aan via videobellen. Dit kan handig zijn als er geen coach in je buurt is of als online beter uitkomt.	Online	4	t	2025-09-19 14:31:52.752735	2025-09-19 14:31:52.752735
5	Wat moet ik verwachten van de eerste sessie?	In de eerste sessie bespreek je je hulpvraag, doelen en verwachtingen. De coach legt uit hoe hij/zij werkt en samen maken jullie een plan voor de coaching.	Proces	5	t	2025-09-19 14:31:52.752735	2025-09-19 14:31:52.752735
\.


--
-- Name: blog_posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.blog_posts_id_seq', 10, true);


--
-- Name: chat_conversations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.chat_conversations_id_seq', 1, false);


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.cities_id_seq', 52, true);


--
-- Name: coaches_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.coaches_id_seq', 60, true);


--
-- Name: faq_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neondb_owner
--

SELECT pg_catalog.setval('public.faq_items_id_seq', 5, true);


--
-- Name: blog_posts blog_posts_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.blog_posts
    ADD CONSTRAINT blog_posts_pkey PRIMARY KEY (id);


--
-- Name: blog_posts blog_posts_slug_unique; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.blog_posts
    ADD CONSTRAINT blog_posts_slug_unique UNIQUE (slug);


--
-- Name: chat_conversations chat_conversations_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.chat_conversations
    ADD CONSTRAINT chat_conversations_pkey PRIMARY KEY (id);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- Name: cities cities_slug_unique; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_slug_unique UNIQUE (slug);


--
-- Name: coaches coaches_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.coaches
    ADD CONSTRAINT coaches_pkey PRIMARY KEY (id);


--
-- Name: faq_items faq_items_pkey; Type: CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.faq_items
    ADD CONSTRAINT faq_items_pkey PRIMARY KEY (id);


--
-- Name: blog_posts blog_posts_city_id_cities_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.blog_posts
    ADD CONSTRAINT blog_posts_city_id_cities_id_fk FOREIGN KEY (city_id) REFERENCES public.cities(id);


--
-- Name: coaches coaches_city_id_cities_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: neondb_owner
--

ALTER TABLE ONLY public.coaches
    ADD CONSTRAINT coaches_city_id_cities_id_fk FOREIGN KEY (city_id) REFERENCES public.cities(id);


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO neon_superuser WITH GRANT OPTION;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: cloud_admin
--

ALTER DEFAULT PRIVILEGES FOR ROLE cloud_admin IN SCHEMA public GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO neon_superuser WITH GRANT OPTION;


--
-- PostgreSQL database dump complete
--

