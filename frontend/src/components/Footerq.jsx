import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white h-16 fixed bottom-0 w-full">
            <div className="container mx-auto text-center h-full flex items-center justify-center">
                <p className="text-sm">
                    Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd
                </p>
            </div>
        </footer>
    );
}
