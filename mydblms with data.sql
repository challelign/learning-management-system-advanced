-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2024 at 02:40 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydblms`
--

-- --------------------------------------------------------

--
-- Table structure for table `attachment`
--

CREATE TABLE `attachment` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `url` text NOT NULL,
  `courseId` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attachment`
--

INSERT INTO `attachment` (`id`, `name`, `url`, `courseId`, `createdAt`, `updatedAt`) VALUES
('16ea29b9-b7ec-4274-bc57-317cd01995a4', '61139721-6ed6-40b9-9fa1-fa4454205fc0-1c1j3v.pdf', 'https://utfs.io/f/61139721-6ed6-40b9-9fa1-fa4454205fc0-1c1j3v.pdf', '09efc4fc-4c70-4582-831d-d41e387329b7', '2024-02-23 08:33:28.014', '2024-02-23 08:33:28.014'),
('23e1d8bb-dcdf-4ae3-bfc1-c0198d62ade7', '37b748e7-0aad-4012-9898-22c173977fc0-xgsijg.txt', 'https://utfs.io/f/37b748e7-0aad-4012-9898-22c173977fc0-xgsijg.txt', '9f2d0e9c-367a-4eb0-bf30-b1d4e46bbbbb', '2024-02-23 08:50:33.620', '2024-02-23 08:50:33.620'),
('473cab58-cd80-43da-bb89-e31e9fc9ac2b', '8fad10ae-da4c-4330-80e7-1775ec42feae-kqqins.pdf', 'https://utfs.io/f/8fad10ae-da4c-4330-80e7-1775ec42feae-kqqins.pdf', '4b952ad0-01b1-422c-af2e-dace56a66d38', '2024-02-23 08:28:46.977', '2024-02-23 08:28:46.977'),
('7c745b04-e752-47b3-8ef0-e040aac3b8be', '777f6ca1-8484-467a-82d5-c242f270ebf1-j75vnc.pdf', 'https://utfs.io/f/777f6ca1-8484-467a-82d5-c242f270ebf1-j75vnc.pdf', '0e5ee95f-8676-4e9d-a704-c45ad2cfdc18', '2024-02-23 08:15:51.206', '2024-02-23 08:15:51.206'),
('86926c68-a903-458d-869e-09ef56a0b638', '1a61bb9f-4b3f-478c-a967-4961d1ed3593-1pl.jpg', 'https://utfs.io/f/1a61bb9f-4b3f-478c-a967-4961d1ed3593-1pl.jpg', '4b952ad0-01b1-422c-af2e-dace56a66d38', '2024-02-26 06:54:19.475', '2024-02-26 06:54:19.475'),
('9800d121-da45-4555-92de-e80bdcba1d31', '75ef9244-6a60-42e0-abc0-e7ae70b6c17b-wsxmkr.pdf', 'https://utfs.io/f/75ef9244-6a60-42e0-abc0-e7ae70b6c17b-wsxmkr.pdf', '0e5ee95f-8676-4e9d-a704-c45ad2cfdc18', '2024-02-23 08:16:07.002', '2024-02-23 08:16:07.002'),
('9fa6938c-4a06-49c9-8777-5a2e0b9b8318', '251c08ed-e531-41ac-8b46-a000ca6a861a-1kd43d.pdf', 'https://utfs.io/f/251c08ed-e531-41ac-8b46-a000ca6a861a-1kd43d.pdf', '09efc4fc-4c70-4582-831d-d41e387329b7', '2024-02-23 08:33:09.793', '2024-02-23 08:33:09.793'),
('af090c06-1f1d-43fa-af45-5b9ecd9f9b7a', 'af01c1ae-6286-4b5e-902c-8a724460e2f8-p9in24.pdf', 'https://utfs.io/f/af01c1ae-6286-4b5e-902c-8a724460e2f8-p9in24.pdf', '9f2d0e9c-367a-4eb0-bf30-b1d4e46bbbbb', '2024-02-23 08:50:17.458', '2024-02-23 08:50:17.458'),
('dccd6956-4f51-4301-af62-7aad562b558c', 'f814365b-ecdb-4091-8429-b787b2602f0d-wsxmkr.pdf', 'https://utfs.io/f/f814365b-ecdb-4091-8429-b787b2602f0d-wsxmkr.pdf', '4b952ad0-01b1-422c-af2e-dace56a66d38', '2024-02-23 08:29:01.743', '2024-02-23 08:29:01.743'),
('efef635c-6659-496e-a228-49c68c892df5', '8383209f-dabe-4a75-a631-9adff60250dc-2efyho.3-Application-Development-Cookbook.pdf', 'https://utfs.io/f/8383209f-dabe-4a75-a631-9adff60250dc-2efyho.3-Application-Development-Cookbook.pdf', '7e8798b9-dffc-43dc-983d-43efeff0e1bc', '2024-02-23 08:43:21.106', '2024-02-23 08:43:21.106');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
('bec87eae-142a-4d73-8d36-6872376a59af', 'Accounting'),
('7e658c79-2165-4552-b1d7-45a8a323e2ee', 'Computer Science'),
('dcddffb3-227e-42c7-bb6f-15a4b8153d13', 'Engineering'),
('a7d8b994-2a7c-4858-b799-e24bee110ac7', 'Filming'),
('98b864e9-9d93-4ba9-a514-fd17afbdb4f1', 'Fitness'),
('70cef75d-4297-4987-aa59-3d1bf113d2bf', 'Music'),
('cb743a68-0c9f-4d8c-8746-6bfcc9672d78', 'Photography');

-- --------------------------------------------------------

--
-- Table structure for table `chapter`
--

CREATE TABLE `chapter` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `videoUrl` text DEFAULT NULL,
  `position` int(11) NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT 0,
  `isFree` tinyint(1) NOT NULL DEFAULT 0,
  `courseId` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chapter`
--

INSERT INTO `chapter` (`id`, `title`, `description`, `videoUrl`, `position`, `isPublished`, `isFree`, `courseId`, `createdAt`, `updatedAt`) VALUES
('02b22e6b-158a-4703-981f-ecdfd57fa86e', 'Module one', '<h3><strong style=\"background-color: rgb(241, 245, 249); color: rgb(2, 8, 23);\">SQL </strong></h3><p><span style=\"background-color: rgb(241, 245, 249); color: rgb(2, 8, 23);\"><span class=\"ql-cursor\">﻿</span>This is another common tech skill that every Java developer should learn as it will help you to troubleshoot back-end issues. If you know SQL you can understand the stored procedure, query database, and find out whether the issue is in the Java layer or Database layer. I highly recommend every Programming whether a Java developer or a Python developer to learn SQL, it’s one of those skills which are easy to learn and serve you for a long time in your career as a programmer or developer. If you need a resource, I suggest looking at the Complete SQL + Databases Bootcamp: Zero to Mastery course by Andrei Negaoie on ZTM Academy</span></p>', 'https://utfs.io/f/f8d3b32c-ea77-4318-8164-400fe7544779-18te9m.mp4', 1, 1, 1, '4b952ad0-01b1-422c-af2e-dace56a66d38', '2024-02-23 08:18:02.423', '2024-02-26 07:00:35.975'),
('0c424345-506b-46b2-9d68-b3d0fda693f9', 'module one', '<p><span style=\"color: rgb(77, 81, 86);\">Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.</span></p>', 'https://utfs.io/f/f1034bdb-ca87-4d6b-89ff-a409905d184d-fqpcwl.mp4', 1, 1, 1, '09efc4fc-4c70-4582-831d-d41e387329b7', '2024-02-23 08:33:39.503', '2024-02-23 08:35:18.932'),
('0f6c1666-156f-41e9-8a47-7d73adb6ff4b', 'module three', '<p><span style=\"color: rgb(39, 50, 57);\">Linux is a widely-used open-source operating system, similar to Windows, Mac, and Android. It shares similarities with Unix, another operating system known for its commercial use. Unix and Linux have comparable components, including the kernel, shell, and programs. Many commands in Unix and Linux exhibit similar behavior and syntax.</span></p>', 'https://utfs.io/f/e3715f23-0d62-43ed-9151-0429f9d0a1a7-40r83i.mp4', 3, 1, 0, '09efc4fc-4c70-4582-831d-d41e387329b7', '2024-02-23 08:33:49.585', '2024-02-23 08:43:10.628'),
('19ef3c19-4968-4c7c-9a80-6308cdb26867', 'chapter one', '<p>Google Cloud Certification training in Chicago by Edureka is designed to meet the industry benchmarks. This course is curated by top industry experts. It gives you a solid foundation to appear for the Google Certified Professional Cloud Architect exam. GCP Training in Chicago will enable you to design, develop, and manage a robust, secure, and highly available cloud-based solution for your organization\'s needs. This GCP certification course consists of demonstrations, assignments, MCQs, and projects to help you master the concepts.</p><p><br></p><p><br></p>', 'https://utfs.io/f/8f888c30-33a0-48d3-9dcd-734c08633664-j50hrh.mp4', 1, 1, 1, '9f2d0e9c-367a-4eb0-bf30-b1d4e46bbbbb', '2024-02-23 08:47:21.281', '2024-02-23 08:49:39.208'),
('219ee0a7-73ee-4676-ac99-6fc5e2950a97', 'module three', '<h2>Possibilities: how can you use Golang?</h2><p>The number of uses for Go is rising each day. Besides web services, it can be used for big data, Web APIs, backends, mobile apps, migrations, audio/video software, machine learning, networking, software engineering, and more. Of course, you can also use it in Docker and Kubernetes. Additionally, it comes with memory safety, a rubbish collector, and a great handle of concurrency via goroutines. In the next part, you can find more real-life examples of how Golang is used.</p>', 'https://utfs.io/f/823d51ae-c415-4080-b470-31dd1b21c6cf-40r83i.mp4', 3, 1, 0, '7e8798b9-dffc-43dc-983d-43efeff0e1bc', '2024-02-23 08:37:54.550', '2024-02-23 08:45:46.751'),
('276252e1-41aa-4b91-80ae-688816a248a1', 'Introduction', NULL, NULL, 1, 0, 0, '80a38f5c-b887-4104-b3f4-e38eccebb0d8', '2024-02-23 12:41:15.632', '2024-02-23 12:41:15.632'),
('2a822118-e27d-4fc6-9fa8-f5255c20c0de', 'module two', '<p>The cat command will allow you to see an entire file in your terminal quickly. This is more useful for smaller files unless you\'re grepping for certain things.</p><p><br></p>', 'https://utfs.io/f/28cbcf7f-c5f3-42c7-b264-d52e96e10a16-1dmk9a.mp4', 2, 1, 0, '09efc4fc-4c70-4582-831d-d41e387329b7', '2024-02-23 08:33:44.472', '2024-02-23 08:41:12.686'),
('3b213177-5a3d-4cdb-b70a-2ac7359b869a', 'chapter two', '<p><strong>Associate Cloud Engineer</strong></p><p>Associate Cloud Engineers deploy applications, monitor operations, and manage&nbsp;enterprise solutions. They use Google Cloud Console and the command-line interface to perform common platform-based tasks to maintain one or more deployed solutions that leverage Google-managed or self-managed services on Google Cloud.</p><p><br></p>', 'https://utfs.io/f/29173912-a2db-4ec4-9e62-b3431e96f760-40r83i.mp4', 2, 1, 0, '9f2d0e9c-367a-4eb0-bf30-b1d4e46bbbbb', '2024-02-23 08:47:25.645', '2024-02-23 08:49:05.860'),
('3eeccab3-b49d-4a3c-871a-a05094a73501', 'chapter three', '<p><span style=\"color: rgb(2, 8, 23); background-color: rgb(241, 245, 249);\">Introduction to the Course Accounting Information System – Refresher Conceptual Framework for Reporting Income Statement; Other Income Items; Other Reporting Issues Balance Sheet Time Value of Money Cash and Receivables Inventories Other Valuation Issues of Inventories Statement of Cash Flows</span></p><p><br></p>', 'https://utfs.io/f/48e5a7ea-1714-4311-856a-3005e61bcb7a-18te9m.mp4', 3, 1, 0, '0e5ee95f-8676-4e9d-a704-c45ad2cfdc18', '2024-02-23 08:10:21.839', '2024-02-23 13:06:56.171'),
('4ac84a19-d4d6-4ea2-b88a-84bec50cfa95', 'module one', '<h2>The idea behind Go</h2><p>The aim with Go was simple: Google wanted to improve productivity by designing a tool fit for their needs. As it was built just 13 years ago, it’s natural that it would be better adapted to modern times and technology. A great example of that is included support for multicore CPUs, whose share in the market was rapidly growing and for obvious reasons was missed in predecessors. This directly translates into easier development of apps using multi-threads and makes them more reliable.</p><p>&nbsp;</p><p>Thanks to years of experience in the market it was also designed as a fast and versatile language, easier to learn, with syntax more accessible and easier scalable for bigger projects. Thanks to Go’s design, you’ll learn it quicker than competitors.</p>', 'https://utfs.io/f/bb868f5c-8831-4b10-add3-c56b006a6df4-j50hrh.mp4', 1, 1, 1, '7e8798b9-dffc-43dc-983d-43efeff0e1bc', '2024-02-23 08:37:38.906', '2024-02-23 08:45:56.898'),
('6a6b0c0b-c98f-47a0-b2b2-637ca0e6de24', 'module two', '<h2>The history behind the Go programming language</h2><p>The first version was deployed internally at Google in 2009 when it was also announced to the public. The full release followed three years later in March 2012. Since its premiere, it reached version go 1.18 with 1.19 planned for Q3 2022. Although support has ended for versions up to 1.16 Go guarantees compatibility for major parts of the library and language specifications.&nbsp;</p>', 'https://utfs.io/f/74474dc4-09b9-4741-83e9-efe59e7de358-40r83i.mp4', 2, 1, 0, '7e8798b9-dffc-43dc-983d-43efeff0e1bc', '2024-02-23 08:37:45.646', '2024-02-23 08:45:19.988'),
('74e3c080-a314-41fc-b7fe-f6845f777fb3', 'Module two', '<pre class=\"ql-syntax\" spellcheck=\"false\">Introduction to the Course Accounting Information System – Refresher Conceptual Framework for Reporting Income Statement; Other Income Items; Other Reporting Issues Balance Sheet Time Value of Money Cash and Receivables Inventories Other Valuation Issues of Inventories Statement of Cash Flows\n</pre>', 'https://utfs.io/f/04c4fb11-ef30-47b0-8be6-de42b9671ead-u4ty50.mp4', 2, 1, 0, '4b952ad0-01b1-422c-af2e-dace56a66d38', '2024-02-23 08:18:07.359', '2024-02-23 13:09:12.687'),
('9003ed01-6ffb-4e47-a564-10c022e7ef8a', 'chapter three', '<p><strong style=\"color: rgb(95, 99, 104);\">Certification Renewal / Recertification:&nbsp;</strong><span style=\"color: rgb(95, 99, 104);\">Candidates must recertify in order to maintain their certification status.&nbsp;</span><strong style=\"color: rgb(95, 99, 104);\">Effective October 1, 2022 the Associate Cloud Engineer certification is valid for three years from the date of certification.&nbsp;</strong><span style=\"color: rgb(95, 99, 104);\">Recertification is accomplished by retaking the exam during the recertification eligibility time period and achieving a passing score. You may attempt recertification starting 60 days prior to your certification expiration date.</span></p>', 'https://utfs.io/f/2dbb7616-2113-447d-8fe6-550ceb8de1d0-ssea5i.mp4', 3, 1, 0, '9f2d0e9c-367a-4eb0-bf30-b1d4e46bbbbb', '2024-02-23 08:47:30.351', '2024-02-23 08:50:10.965'),
('9d4252c4-74f7-46e6-a847-ce33aa3e6c9e', 'chapter four', '<p><span style=\"background-color: rgb(241, 245, 249); color: rgb(2, 8, 23);\">Course Accounting Information System – Refresher Conceptual Framework for Reporting Income Statement; Other Income Items; Other Reporting Issues Balance Sheet Time Value of Money Cash and Receivables Inventories Other Valuation Issues of Inventories Statement of Cash Flows</span></p>', 'https://utfs.io/f/9dbf726d-ed67-419a-84c9-444aeb09a7cd-m85jyd.mp4', 4, 1, 0, '0e5ee95f-8676-4e9d-a704-c45ad2cfdc18', '2024-02-23 08:10:27.212', '2024-02-23 13:07:52.551'),
('e2c11d93-02c4-4bd2-bdd5-aaea45ce46ec', 'Module three', '<p><span class=\"ql-cursor\">﻿</span><span style=\"color: rgb(70, 70, 70);\">The simplest approach is to store images in directories on the file system and store references to the photos in the database like SQL &amp; MySQL, for example, the path to the image, the image name, and so on. Alternatively, you may even keep images on a CDN or numerous hosts across some great expanse of substantial territory and keep their references to access those resources in that database.</span></p>', 'https://utfs.io/f/690ceda6-d2c2-47fe-b395-221fe6ff2e81-om67mw.mp4', 3, 1, 0, '4b952ad0-01b1-422c-af2e-dace56a66d38', '2024-02-23 08:18:12.074', '2024-02-23 13:09:37.548'),
('e80cd37a-204e-454c-9529-15b99e4c97c0', 'into', '<h3><span style=\"background-color: rgb(241, 245, 249); color: rgb(2, 8, 23);\">Refresher Conceptual Framework for Reporting Income Statement; Other Income Items; Other Reporting Issues Balance Sheet Time Value of Money Cash and Receivables Inventories Other Valuation Issues of Inventories Statement of Cash Flows</span></h3>', 'https://utfs.io/f/dad75af8-8c60-4604-bf78-6ab57e4b225e-ij60j5.mp4', 5, 1, 1, '0e5ee95f-8676-4e9d-a704-c45ad2cfdc18', '2024-02-26 07:07:49.433', '2024-02-26 07:09:08.637'),
('eff4f579-b6c0-48fb-9fd1-89c5f47d93bb', 'chapter one', '<p><span style=\"color: rgb(19, 19, 19); background-color: rgba(0, 0, 0, 0.05);\"> Awtar is the first-ever Ethiopian Music App that allows music fans to access and purchase musical works anywhere, anytime; while protecting the copyright of everyone who got involved in creating the Music to benefit from their hard work.  </span></p><p><br></p>', 'https://utfs.io/f/cd3548b7-3988-47c1-bae6-4a0a1a6d66e4-m85jyd.mp4', 1, 1, 1, '0e5ee95f-8676-4e9d-a704-c45ad2cfdc18', '2024-02-23 08:10:08.960', '2024-02-26 07:07:01.192'),
('f1a47f01-4136-439d-a600-59ff5c9da7fd', 'chapter two', '<p><span style=\"color: rgb(36, 38, 40);\">An environment represents the highest grouping of data you want to combine and compare within. Multiple websites/apps or video platforms can use the same environment, but we suggest not combining staging and production data.</span></p><p><br></p>', 'https://utfs.io/f/a09e105c-5504-44c7-9774-db91b55d3de2-ssea5i.mp4', 2, 1, 0, '0e5ee95f-8676-4e9d-a704-c45ad2cfdc18', '2024-02-23 08:10:15.955', '2024-02-23 13:06:00.493');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `title` text NOT NULL,
  `description` text DEFAULT NULL,
  `imageUrl` text DEFAULT NULL,
  `price` double DEFAULT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT 0,
  `categoryId` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `userId`, `title`, `description`, `imageUrl`, `price`, `isPublished`, `categoryId`, `createdAt`, `updatedAt`) VALUES
('09efc4fc-4c70-4582-831d-d41e387329b7', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'Linux', 'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.', 'https://utfs.io/f/a8f8bd7c-0344-4e87-8da5-2c33d33b28e6-ibclwm.jpg', 120, 1, '7e658c79-2165-4552-b1d7-45a8a323e2ee', '2024-02-22 12:49:29.152', '2024-02-23 08:45:05.678'),
('0e5ee95f-8676-4e9d-a704-c45ad2cfdc18', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'Intermediate Accounting 1: Easy. Fast. Simple', 'Who it\'s for: Intermediate students\n\nPrice: On sale\n\nAlso presented by Stefan Ignatovski, Ph.D., Intermediate Accounting 1: Easy. Fast. Simple! helps you prepare for the CPA exam. It only takes a few hours to complete and is structured to make it easy to retain the information presented in the lessons.\n\nBelow is a breakdown of the course: \n\nIntroduction to the Course\nAccounting Information System – Refresher\nConceptual Framework for Reporting\nIncome Statement; Other Income Items; Other Reporting Issues\nBalance Sheet\nTime Value of Money \nCash and Receivables\nInventories\nOther Valuation Issues of Inventories\nStatement of Cash Flows', 'https://utfs.io/f/160f288c-e732-49c7-9802-c9bf7569912b-txft5g.jpg', 200, 1, 'bec87eae-142a-4d73-8d36-6872376a59af', '2024-02-22 13:11:32.489', '2024-02-26 06:27:19.949'),
('11df6a99-9ffd-47ef-bda6-677a7f204a17', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'iOS and Swift: The Complete iOS App Development Bootcamp by Angela Yu', 'If you want to learn how to build native iOS apps in 2024 then this course is a great place to start. You’ll learn how to use Xcode, Swift, and other tools to build iOS apps from scratch, and how to publish your apps to the App Store.\n\nAlong with Jose Portilla, Colt Steele, Angela Yu is another Udemy instructor which is really good at teaching and no wonder she also has bootcamp background. I have taken all of her courses on Udemy including the web developer bootcamp and this one and I am amazed with depth of her knowledge and how easily she transfer that to her students.\n\nIt doesn’t matter whether you are a new to programming and app development or a veteran programmer like me, you will learn a thing or two from her course for sure.\n\nThe course covers everything from the basics of iOS development to advanced techniques and you will quickly learn how to develop iOS apps which user loves. You will also learn how to upload those apps into AppStore and monetize them using ads.', NULL, NULL, 0, NULL, '2024-02-22 12:45:01.024', '2024-02-22 12:45:13.958'),
('35f3098a-fbfe-4eeb-8ff0-43207865cedd', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'Accounting: From Beginner to Advanced!', 'Who it\'s for: Beginners\n\nPrice: On sale \n\nThis Udemy bestseller will take you from accounting novice to subject-matter expert in record time. It features 4 hours of on-demand video, 2 articles and 24 downloadable resources to help you learn the fundamentals of accounting. \n\nAccounting: From Beginner to Advanced! entails the following segments: \n\nIntroduction to the Course\nAccounting Principles and Fundamentals\nAccounting During the Year\nAccounting at Year-End\nKeeping Cash and Bank Reconciliation – A Must Know!\nAccounts Receivable – Collections – Not Everyone Pays\nAccounting for Merchandising Businesses\nTracking Inventory – More Competitive, Save on Taxes\nFixed Assets and Depreciation – Get It Right!\nAccounts Payable and Bonds\nEquity – Stocks and Dividend\nInvestments and Time Value of Money\nStatement of Cash Flows\nFinancial Statements and Analysis \nConclusion', NULL, NULL, 0, 'bec87eae-142a-4d73-8d36-6872376a59af', '2024-02-22 13:10:20.872', '2024-02-22 13:10:50.368'),
('412ed901-7d5c-4a29-8dbb-dbd34c15eaa0', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', '100 Days of Code: The Complete Python Pro Bootcamp for 2024 by Angela Yu', 'This is the second Python course I have included in this list, I thought should I include it or not given I have already included a Python course by Jose Portilla but then I thought if I didn’t mention this course in this list then it probably won’t be right with my readers as they all want to learn Python and this course can really help them learning python\n\nPython is a popular, versatile programming language that’s great for beginners and experienced developers alike. This comprehensive course covers everything you need to know to get started with Python, from the basics of syntax and data types to more advanced concepts like object-oriented programming and data analysis.\n\nYou’ll also get to work on lots of fun projects to put your skills to the test.By the way, f you are confused between Python bootcamp course between Jose Portilla and Angela Yu then don’t worry, both are great courses.\n\nIf money is concern, you can either choose this course or Complete Python bootcamp by Jose portilla depending upon which instructor you connect. You can do this by watching preview lesson and if you can watch them without skipping, forwarding then it\'s a good sign that you are connecting with the instructor.\n\nThough, I would suggest to join both as I did because both courses are quite different and it will only help you to learn Python better if you learn from multiple gifted teachers like Angela Yu and Jose Portilla. More often then not, I learn better when I learn from different teachers.', NULL, NULL, 0, NULL, '2024-02-22 12:45:34.994', '2024-02-22 12:46:03.771'),
('4b952ad0-01b1-422c-af2e-dace56a66d38', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'SQL', 'This is another common tech skill that every Java developer should learn as it will help you to troubleshoot back-end issues. If you know SQL you can understand the stored procedure, query database, and find out whether the issue is in the Java layer or Database layer.\n\nI highly recommend every Programming whether a Java developer or a Python developer to learn SQL, it’s one of those skills which are easy to learn and serve you for a long time in your career as a programmer or developer.\n\nIf you need a resource, I suggest looking at the Complete SQL + Databases Bootcamp: Zero to Mastery course by Andrei Negaoie on ZTM Academy.', 'https://utfs.io/f/19ca4213-40d5-45aa-8dde-bc26d140af65-ibcluw.png', 90, 1, '7e658c79-2165-4552-b1d7-45a8a323e2ee', '2024-02-22 12:50:40.187', '2024-02-23 08:35:13.300'),
('5816e6bc-8f7b-43a8-ad5d-ae86866885fb', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'Git & Github', 'One of the most popular version control systems. It’s just not possible to live without Git anymore. As a programmer, you should be familiar with Git and Github, essential Git concepts like a branch, master, checkout, checking, push and pull, as well essential git commands like git diff, git commit, etc.\n\nI highly recommend Java programmers to learn Git and Github and if you already worked with Git then you can also level up your Git skills and If you need a resource then you can check out The Git Complete Guide on Udemy to start with.', NULL, NULL, 0, NULL, '2024-02-22 12:49:07.521', '2024-02-22 12:49:16.100'),
('6981fd9c-e037-4377-ace6-86c4299cfa64', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'Data Structures and Algorithms', 'These are the building blocks of any program, and a good knowledge of Algorithms and Data Structure is vital for your next job or doing well in your current situation.\n\nYou should at least be familiar with essential data structures like an array, linked list, hash table, binary tree, queue, stack, and graph as well problem-solving techniques like dynamic programming.\n\nIf you know advanced data structures like Trie, B-Tree, AVL tree, then it’s well and good. But, if you don’t know, then I suggest you join a comprehensive course like Data Structures and Algorithms: Deep Dive Using Java, which will teach you everything about all those fundamentals.', NULL, NULL, 0, '7e658c79-2165-4552-b1d7-45a8a323e2ee', '2024-02-22 12:50:08.735', '2024-02-22 13:06:14.699'),
('7e8798b9-dffc-43dc-983d-43efeff0e1bc', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'Go: The Complete Developer’s Guide', 'Go is a popular, open-source programming language developed by Google. It’s known for its simplicity, speed, and concurrency support and if you want to learn Golang in 2024 then Go: The Complete Developer’s Guide is one of the best course money can buy.\n\nThis Golang online course is specially designed for beginners so that you can learn Go programming language from scratch. It start with the Introduction to Go for beginners, explaining bit of history about Go and why Google decided to create a new programming language to improve developer productivity.\n\nAlong the way you’ll learn the basics of the language, and how to build simple programs and web servers. You will also learn concurrency support in Golang, which is probably the best in any programming language after Java.\n\nDuration: 11 hours\n\nRating: 4.5 out of 5 stars (6,000+ ratings)\n\nInstructor: Stephen Grider\n\nPrice: $13.99 (on sale from $200)', 'https://utfs.io/f/112d02ee-4d40-40f0-9e0f-237bc3974593-ibclxh.jpg', 120, 0, 'dcddffb3-227e-42c7-bb6f-15a4b8153d13', '2024-02-22 12:48:03.802', '2024-02-23 08:39:14.519'),
('80a38f5c-b887-4104-b3f4-e38eccebb0d8', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', '2. Accounting Foundations by LinkedIn Learning', 'Who it\'s for: Beginners\n\nPrice: Included with the monthly membership\n\nAccounting Foundations is another exceptional introductory course for newbies. It offers a primer to the 4 basic accounting types: bookkeeping, financial accounting, tax accounting and managerial accounting. Students also discover how accounting, decision-making, business performance and financial health are all interconnected. \n\nThe class is co-facilitated by accounting professors Kay Stice and Jim Stice and includes 7 components: \n\nIntroduction \nWhat Is Accounting?\nFinancial Accounting: Balance Sheet\nFinancial Accounting: Income Statement and Cash Flow \nManagerial Accounting\nIncome Taxes\nConclusion', NULL, NULL, 0, 'bec87eae-142a-4d73-8d36-6872376a59af', '2024-02-22 13:10:55.859', '2024-02-22 13:11:15.677'),
('8bf4292e-59d3-46da-b38d-5f955c0ab33d', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'Linux', 'Not just a web developer but for any programmer, the Linux command line is very, very important, and I strongly recommend you to spend some time learning them. Since most Java applications are server-side, you will often find them running on Linux servers.\n\nThat’s why it\'s imperative for Java developers to be familiar with essential Linux concepts and commands related to files, disk space checking, process management, as well as networking commands.\n\nIf you need a resource to level up your Linux skills, I recommend checking out Linux Mastery: Master the Linux Command Line in 11.5 Hours course on Udemy. This is a great course for anyone who wants to learn Linux commands from scratch.', NULL, NULL, 0, NULL, '2024-02-22 12:49:21.969', '2024-02-22 12:49:37.328'),
('9f2d0e9c-367a-4eb0-bf30-b1d4e46bbbbb', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'GCP Associate Cloud Engineer — Google Cloud Certification', 'Another tech skill which I think every programmer should learn is Cloud Computing. In last 5 years, Cloud Computing has become a core skill for any Software developer.\n\nIt doesn’t matter whether you code in Java, Golang, Python, or JavaScript, you will eventually deploy your application in Cloud and that’s why knowledge of Cloud Computing, particularly the big 3 Cloud platforms like AWS, Google Cloud, and AWS Is impetrative for programmers and developers.\n\nEarlier, I have shared best AWS courses and best Azure courses and here I am sharing one of the best Udemy course to learn Google Cloud Platform in 2024.\n\nWhy GCP? Well, Google Cloud Platform is a popular choice for hosting and running applications and data particularly Big Data and ML related application which will power future application development.\n\nThis course will teach you how to use the various tools and services offered by Google Cloud, and how to design, build, and deploy cloud-based solutions.\n\nThe bonus part of this course is that you’ll also learn how to prepare for and pass the Google Cloud Platform Certified Professional Cloud Architect exam.', 'https://utfs.io/f/89fb0f17-1378-4269-a7cc-54407ee36f95-ibclwm.png', 200, 1, '7e658c79-2165-4552-b1d7-45a8a323e2ee', '2024-02-22 12:48:23.926', '2024-02-23 08:51:37.486'),
('ad40eeda-348f-48f6-b9b9-762518ee6ce7', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'Python Bootcamp by Jose Portilla', 'If your goal is to become a Python developer in 2024 and you are looking for the best Udemy course to learn Python in 2024 then there is no better course than Jose Portilla’s Complete Python Bootcamp course on Udemy.\n\nThis Python online course is unique in the sense that it teaches you what every line of code does in a simple Python program. It also comes with lots of coding exercises and articles which you can read along.\n\nOn top of that Jose portilla is one of the best instructor and Python expert on Udemy so you will be learning from best.\n\nNo wonder, more than 1.65 million people have joined this course on Udemy, making it probably the Udemy’s most watched course o history. If you want to learn Python in 2024, I highly recommend this course to you.', NULL, NULL, 0, NULL, '2024-02-22 12:42:17.815', '2024-02-22 12:42:57.933'),
('aeeb1323-1e30-4dd8-b519-c58deda50621', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'Machine Learning A-Z: Python & R In Data Science by Kirill Eremenko', 'If you’re interested in getting into the fast-growing field of machine learning, this course is a great place to start. You’ll learn the fundamental concepts and techniques of machine learning, and how to apply them using Python and R.\n\nDuration: 21 hours\n\nRating: 4.5 out of 5 stars (130,000+ ratings)\n\nInstructors: Kirill Eremenko, Hadelin de Ponteves, and the SuperDataScience Team\n\nPrice: $13.99 (on sale from $200)\n\nThe course covers a wide range of topics, including supervised and unsupervised learning, decision trees, random forests, and more.', NULL, NULL, 0, NULL, '2024-02-22 12:44:35.383', '2024-02-22 12:44:49.202'),
('af24b4ab-ea51-4681-a328-e676862aa09c', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'The Web Developer Bootcamp by Colt Steele 2024', 'If you want to learn web development in 2024 and want to build modern, responsive websites from scratch, this is the course for you. You’ll start with the basics of HTML, CSS, and JavaScript, then move on to more advanced topics like jQuery, Bootstrap, PHP, MySQL, and more.\n\nWhile Udemy has many great web development courses, I particularly liked this one because Colt Steele is such a great instructor and has a gifted teaching quality. He can explain a complex topic with so much simplicity and fluency that no other instructor can match and his bootcamp experience really helps.\n\nIn short, you get a bootcamp kind of learning experience for a fraction of cost. While a bootcamp cost around 10,000 USD, you can get this course online for just $10 on Udemy sales. Here are main points of this course.\n\nBy the end of the course, you’ll not only learn web development basics but also should be able to build your own dynamic, database-driven websites.', NULL, NULL, 0, NULL, '2024-02-22 12:43:27.358', '2024-02-22 12:44:10.603'),
('b0a7c88c-0742-4c04-9275-4f8fb9e9dc50', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'Java Masterclass by Tim Buchalaka', 'If one of your goal in 2024 is to learn Java and you are looking for the best Udemy course to learn Java then you must check the Java Masterclass by Tim Buchalaka on Udemy.\n\nThis 101 hour long course is one of the most comprehensive course to learn Java and suitable for both beginners and intermediate developers who wants to learn Java online.\n\nThe course covers essential Java and Object oriented programming concepts like data types, class and objects, operators, control flow, writing code in general as well key Java API and classes like Java Collection Framework, Multithreading, Java IO, Generics and much more.\n\nThe course is also recently updated for Java 17 which makes it even more useful. If you want to learn Java in 2024 from scratch, I highly recommend this Java online course on Udemy.\n\nIt’s also very affordable and you can grab it for just $9.9 during Udemy sales which happens every now and then. You can even check there may a Udemy sale running now.', NULL, NULL, 0, NULL, '2024-02-22 12:40:37.793', '2024-02-22 12:41:35.792'),
('dd45f610-27d9-4fd8-8ef2-533947258399', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'Learn Ethical Hacking From Scratch', 'If you’re interested in a career in cybersecurity, this course is a must-have. You’ll learn how to use tools and techniques used by real-life ethical hackers to find and fix vulnerabilities in systems and networks. The course covers topics like network security, cryptography, web security, and more.\n\nDuration: 35 hours\n\nRating: 4.4 out of 5 stars (90,000+ ratings)\n\nInstructor: Zaid Sabin\n\nPrice: $13.99 (on sale from $200)', NULL, NULL, 0, NULL, '2024-02-22 12:46:11.472', '2024-02-22 12:46:26.583');

-- --------------------------------------------------------

--
-- Table structure for table `muxdata`
--

CREATE TABLE `muxdata` (
  `id` varchar(191) NOT NULL,
  `assetId` varchar(191) NOT NULL,
  `playbackId` varchar(191) DEFAULT NULL,
  `chapterId` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `muxdata`
--

INSERT INTO `muxdata` (`id`, `assetId`, `playbackId`, `chapterId`) VALUES
('5faea733-8e10-4d2e-bdf2-a16fa9f89fba', 'S01Q3cw8voN7AxMz00T8nqx6YjRePvebOkM45WIIAPI38', 'R6DgnxlM197O2lLtqWRr00g2PgG9WnvhYVVoVSb1E8Dc', '74e3c080-a314-41fc-b7fe-f6845f777fb3'),
('6872d928-ab46-4110-bd1c-b5f4fc457f3f', 'OuImuAv3X00a02fqn02q4qYCH9LW802msaxof5JTcv6pLQw', 'dGj00VARcRscW7UN6zHzeTqrGkPNycSMM00yoc4q9tOWU', '9d4252c4-74f7-46e6-a847-ce33aa3e6c9e'),
('835374f5-ce05-4b7a-8271-10b6908b864b', 'zLqj1oHucRCiVAg3Oi02HpJ8f9q3znNZuul00rXvFlfj8', 'GoKplDIX8ObH1mB8WbbH8S2Ou6xv4yM23M6KLNc6k00s', '3eeccab3-b49d-4a3c-871a-a05094a73501'),
('d2bb69e6-6f85-49f6-bfc8-7fe8a1c3f3f1', 'clIsO8nj1u2D02a9vjgNdsUG9ShwEMurf7hlu3fV4OF4', 'ICJMRjGf007D8i2x8VpG3B6yuabjk9KyJTZLMAMqINVQ', 'f1a47f01-4136-439d-a600-59ff5c9da7fd'),
('f5ab6ab4-8f5a-48fa-979b-65472c6668f6', 'mHApR01nm1tAqKrFAJKgzGaB5PJGP7x6hln5oAuhVMmc', 'ZdF9CBpGMgKZ6qz49MX7bmF65I6a2Ry01RJ1LigcK7bs', 'eff4f579-b6c0-48fb-9fd1-89c5f47d93bb'),
('fb17055c-b239-4d3b-9a9e-be77cee994b4', 'IpUVNgQT01DF3MgErN02pOPcqFJZ7Eqrek501det24KJ9Q', 'fhdG00DPunJQXuDFG7lIJeOaQ4oOv501w6g01g01NYs2MT4', 'e2c11d93-02c4-4bd2-bdd5-aaea45ce46ec'),
('feceae6e-7409-4376-8c96-7f10a0e6fb43', 'FylOaHdQ00r02SqLb8982uuxDE9PTigFOxe01ihmiekH8E', 'vaFB7GotbDk900XsnGOhywM9AxBT5iIntB1NRd5ujNm00', 'e80cd37a-204e-454c-9529-15b99e4c97c0');

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `courseId` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stripecustomer`
--

CREATE TABLE `stripecustomer` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `stripeCustomerId` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stripecustomer`
--

INSERT INTO `stripecustomer` (`id`, `userId`, `stripeCustomerId`, `createdAt`, `updatedAt`) VALUES
('73da4944-a4af-4781-ab33-ed5282b0219e', 'user_2c7WDRhRgaTXgF3G3JIaInZbQD4', 'cus_Pc8HxrQKy5baWe', '2024-02-23 08:25:51.631', '2024-02-23 08:25:51.631');

-- --------------------------------------------------------

--
-- Table structure for table `userprogress`
--

CREATE TABLE `userprogress` (
  `id` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `chapterId` varchar(191) NOT NULL,
  `isCompleted` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('67a32bd5-4fd5-4704-923f-1d66832139a0', '0bf33b7454b983cd504fe84988a727c2529a9153495ea3654cde98e5a95b6203', '2024-02-20 13:45:32.723', '20240220134523_first', NULL, NULL, '2024-02-20 13:45:23.273', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attachment`
--
ALTER TABLE `attachment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Attachment_courseId_idx` (`courseId`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Category_name_key` (`name`);

--
-- Indexes for table `chapter`
--
ALTER TABLE `chapter`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Chapter_courseId_idx` (`courseId`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Course_categoryId_idx` (`categoryId`);
ALTER TABLE `course` ADD FULLTEXT KEY `Course_title_idx` (`title`);

--
-- Indexes for table `muxdata`
--
ALTER TABLE `muxdata`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `MuxData_chapterId_key` (`chapterId`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Purchase_userId_courseId_key` (`userId`,`courseId`),
  ADD KEY `Purchase_courseId_idx` (`courseId`);

--
-- Indexes for table `stripecustomer`
--
ALTER TABLE `stripecustomer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `StripeCustomer_userId_key` (`userId`),
  ADD UNIQUE KEY `StripeCustomer_stripeCustomerId_key` (`stripeCustomerId`);

--
-- Indexes for table `userprogress`
--
ALTER TABLE `userprogress`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UserProgress_userId_chapterId_key` (`userId`,`chapterId`),
  ADD KEY `UserProgress_chapterId_idx` (`chapterId`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
