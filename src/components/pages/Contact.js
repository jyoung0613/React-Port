import React, { useState } from 'react';
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [result, setResult] = useState('');
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <Container>

        </Container>
    );
}