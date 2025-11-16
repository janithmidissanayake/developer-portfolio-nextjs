import emailjs from '@emailjs/browser';
import { IconButton, Snackbar, SnackbarContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import React, { useContext, useRef, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineSend } from 'react-icons/ai';
import {
    FaFacebook, FaGithub, FaLinkedinIn, FaMediumM,
    FaStackOverflow, FaTwitter
} from 'react-icons/fa';
import { FiAtSign, FiPhone } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import isEmail from 'validator/lib/isEmail';
import { ThemeContext } from '../../contexts/theme-context';
import { contactsData } from '../../data/contacts-data';
import { socialsData } from '../../data/socials-data';

function Contacts() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const form = useRef();
    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        // Check if EmailJS credentials are configured
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('❌ EmailJS not configured! Please set up your .env.local file');
            console.log('Service ID:', serviceId || 'MISSING');
            console.log('Template ID:', templateId || 'MISSING');
            console.log('Public Key:', publicKey || 'MISSING');
            setErrMsg('Email service not configured. Please contact the administrator.');
            setOpen(true);
            return;
        }

        if (name && email && message) {
            if (isEmail(email)) {
                console.log('📧 Attempting to send email...');
                emailjs.sendForm(
                    serviceId,
                    templateId,
                    form.current, 
                    publicKey)
                    .then((result) => {
                        console.log('✅ Email sent successfully!', result.text);
                        setSuccess(true);
                        setErrMsg('');
                        setName('');
                        setEmail('');
                        setMessage('');
                        setOpen(false);
                        setTimeout(() => setSuccess(false), 3000);
                    }, (error) => {
                        console.error('❌ Email send failed:', error);
                        setErrMsg('Failed to send message. Please try again.');
                        setOpen(true);
                    });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col items-start justify-start relative py-16"
            id='contacts'
            style={{ background: theme.quaternary }}
        >
            <div className="flex flex-col items-center lg:items-start justify-start px-4 sm:px-8 lg:px-24 w-full lg:w-4/5 mt-8">
                {/* Section Title */}
                <h1 
                    className="text-4xl lg:text-5xl font-bold mb-12 text-center lg:text-left w-full"
                    style={{ color: theme.primary }}
                >
                    Get In Touch
                </h1>

                <div className="flex flex-col lg:flex-row items-start justify-start w-full gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <div className="w-full lg:w-2/5">
                        <form ref={form} onSubmit={handleContactForm} className="space-y-6">
                            {/* Name Input */}
                            <div className="relative">
                                <label 
                                    htmlFor='Name'
                                    className="absolute -top-3 left-6 px-2 text-sm font-semibold z-10"
                                    style={{ 
                                        color: theme.primary,
                                        backgroundColor: theme.secondary 
                                    }}
                                >
                                    Name
                                </label>
                                <input
                                    placeholder='John Doe'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name='user_name'
                                    className="w-full h-14 px-5 rounded-2xl outline-none transition-all duration-300
                                             border-2 font-medium text-base
                                             focus:scale-[1.02] focus:shadow-lg"
                                    style={{
                                        borderColor: theme.tertiary40 || '#8B98A5',
                                        backgroundColor: theme.secondary,
                                        color: theme.tertiary
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = theme.primary}
                                    onBlur={(e) => e.target.style.borderColor = theme.tertiary40 || '#8B98A5'}
                                />
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <label
                                    htmlFor='Email'
                                    className="absolute -top-3 left-6 px-2 text-sm font-semibold z-10"
                                    style={{ 
                                        color: theme.primary,
                                        backgroundColor: theme.secondary 
                                    }}
                                >
                                    Email
                                </label>
                                <input
                                    placeholder='john@example.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name='user_email'
                                    className="w-full h-14 px-5 rounded-2xl outline-none transition-all duration-300
                                             border-2 font-medium text-base
                                             focus:scale-[1.02] focus:shadow-lg"
                                    style={{
                                        borderColor: theme.tertiary40 || '#8B98A5',
                                        backgroundColor: theme.secondary,
                                        color: theme.tertiary
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = theme.primary}
                                    onBlur={(e) => e.target.style.borderColor = theme.tertiary40 || '#8B98A5'}
                                />
                            </div>

                            {/* Message Textarea */}
                            <div className="relative">
                                <label
                                    htmlFor='Message'
                                    className="absolute -top-3 left-6 px-2 text-sm font-semibold z-10"
                                    style={{ 
                                        color: theme.primary,
                                        backgroundColor: theme.secondary 
                                    }}
                                >
                                    Message
                                </label>
                                <textarea
                                    placeholder='Type your message here...'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    name='message'
                                    rows="6"
                                    className="w-full px-5 py-4 rounded-2xl outline-none transition-all duration-300
                                             border-2 font-medium text-base resize-none
                                             focus:scale-[1.02] focus:shadow-lg"
                                    style={{
                                        borderColor: theme.tertiary40 || '#8B98A5',
                                        backgroundColor: theme.secondary,
                                        color: theme.tertiary
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = theme.primary}
                                    onBlur={(e) => e.target.style.borderColor = theme.tertiary40 || '#8B98A5'}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                className="group relative w-full sm:w-48 h-14 rounded-full font-semibold text-base
                                         flex items-center justify-center gap-3 overflow-hidden
                                         transition-all duration-300 hover:scale-105 hover:shadow-xl
                                         border-0 outline-none cursor-pointer"
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.secondary
                                }}
                            >
                                <span className="relative z-10">
                                    {!success ? 'Send Message' : 'Message Sent!'}
                                </span>
                                <div className="relative z-10 flex items-center justify-center">
                                    <AiOutlineSend
                                        className="text-2xl transition-all duration-500"
                                        style={{
                                            transform: success ? 'translateX(100px)' : 'translateX(0) rotate(-30deg)',
                                            opacity: success ? 0 : 1,
                                        }}
                                    />
                                    <AiOutlineCheckCircle
                                        className="text-2xl absolute transition-all duration-500"
                                        style={{
                                            opacity: success ? 1 : 0,
                                            transform: success ? 'scale(1)' : 'scale(0)',
                                        }}
                                    />
                                </div>
                            </button>
                        </form>

                        {/* Snackbar for errors */}
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <SnackbarContent
                                action={
                                    <React.Fragment>
                                        <IconButton
                                            size='small'
                                            aria-label='close'
                                            color='inherit'
                                            onClick={handleClose}
                                        >
                                            <CloseIcon fontSize='small' />
                                        </IconButton>
                                    </React.Fragment>
                                }
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.secondary,
                                    fontFamily: 'var(--primaryFont)',
                                }}
                                message={errMsg}
                            />
                        </Snackbar>
                    </div>

                    {/* Contact Details */}
                    <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start justify-start 
                                    lg:pl-16 space-y-8">
                        {/* Contact Info Cards */}
                        <div className="w-full space-y-6">
                            {/* Email */}
                            <a
                                href={`mailto:${contactsData.email}`}
                                className="group flex items-center gap-5 p-5 rounded-2xl transition-all duration-300
                                         hover:scale-[1.02] hover:shadow-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${theme.primary}08 0%, ${theme.primary}15 100%)`
                                }}
                            >
                                <div 
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl
                                             transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
                                             shadow-lg"
                                    style={{
                                        backgroundColor: theme.primary,
                                        color: theme.secondary
                                    }}
                                >
                                    <FiAtSign />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold mb-1 opacity-70" style={{ color: theme.tertiary }}>
                                        Email
                                    </p>
                                    <p className="text-base font-semibold break-all" style={{ color: theme.tertiary }}>
                                        {contactsData.email}
                                    </p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href={`tel:${contactsData.phone}`}
                                className="group flex items-center gap-5 p-5 rounded-2xl transition-all duration-300
                                         hover:scale-[1.02] hover:shadow-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${theme.primary}08 0%, ${theme.primary}15 100%)`
                                }}
                            >
                                <div 
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl
                                             transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
                                             shadow-lg"
                                    style={{
                                        backgroundColor: theme.primary,
                                        color: theme.secondary
                                    }}
                                >
                                    <FiPhone />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold mb-1 opacity-70" style={{ color: theme.tertiary }}>
                                        Phone
                                    </p>
                                    <p className="text-base font-semibold" style={{ color: theme.tertiary }}>
                                        {contactsData.phone}
                                    </p>
                                </div>
                            </a>

                            {/* Address */}
                            <div 
                                className="group flex items-center gap-5 p-5 rounded-2xl transition-all duration-300
                                         hover:scale-[1.02] hover:shadow-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${theme.primary}08 0%, ${theme.primary}15 100%)`
                                }}
                            >
                                <div 
                                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl
                                             transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
                                             shadow-lg"
                                    style={{
                                        backgroundColor: theme.primary,
                                        color: theme.secondary
                                    }}
                                >
                                    <HiOutlineLocationMarker />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold mb-1 opacity-70" style={{ color: theme.tertiary }}>
                                        Location
                                    </p>
                                    <p className="text-base font-semibold break-words" style={{ color: theme.tertiary }}>
                                        {contactsData.address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="w-full pt-8">
                            <h3 
                                className="text-xl font-bold mb-6 text-center lg:text-left"
                                style={{ color: theme.primary }}
                            >
                                Connect With Me
                            </h3>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                {socialsData.github && (
                                    <a
                                        href={socialsData.github}
                                        target='_blank'
                                        rel='noreferrer'
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl
                                                 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-md"
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary
                                        }}
                                    >
                                        <FaGithub aria-label='GitHub' />
                                    </a>
                                )}
                                {socialsData.linkedIn && (
                                    <a
                                        href={socialsData.linkedIn}
                                        target='_blank'
                                        rel='noreferrer'
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl
                                                 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-md"
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary
                                        }}
                                    >
                                        <FaLinkedinIn aria-label='LinkedIn' />
                                    </a>
                                )}
                                {socialsData.twitter && (
                                    <a
                                        href={socialsData.twitter}
                                        target='_blank'
                                        rel='noreferrer'
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl
                                                 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-md"
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary
                                        }}
                                    >
                                        <FaTwitter aria-label='Twitter' />
                                    </a>
                                )}
                                {socialsData.medium && (
                                    <a
                                        href={socialsData.medium}
                                        target='_blank'
                                        rel='noreferrer'
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl
                                                 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-md"
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary
                                        }}
                                    >
                                        <FaMediumM aria-label='Medium' />
                                    </a>
                                )}
                                {socialsData.stackOverflow && (
                                    <a
                                        href={socialsData.stackOverflow}
                                        target='_blank'
                                        rel='noreferrer'
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl
                                                 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-md"
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary
                                        }}
                                    >
                                        <FaStackOverflow aria-label='Stack Overflow' />
                                    </a>
                                )}
                                {socialsData.facebook && (
                                    <a
                                        href={socialsData.facebook}
                                        target='_blank'
                                        rel='noreferrer'
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl
                                                 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-md"
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary
                                        }}
                                    >
                                        <FaFacebook aria-label='Facebook' />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Image */}
            <Image
                src={theme.contactsimg}
                alt='contacts'
                className="absolute right-[5%] top-[25%] w-[280px] pointer-events-none 
                         hidden xl:block opacity-30"
            />
        </div>
    );
}

export default Contacts;
