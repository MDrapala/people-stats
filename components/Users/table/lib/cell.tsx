import { useState } from 'react';
import copy from 'copy-to-clipboard';
import Copy from '../../../icons/copy';

export function AvatarCell ({ row })  {
  return (
    <>
      <div className="flex items-center">
        <div className="p-2 cursor-pointer"></div>
        <div className="flex-shrink-0 h-10 w-10">
          <img
            className="h-10 w-10 rounded-full"
            referrerPolicy="no-referrer"
            alt=""
            src={
              row.original.picture.thumbnail
              || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm'
            }
          />
        </div>
      </div>
    </>
  );
}

export function UserCell({ row }) {
  const [copied, setCopied] = useState(false);
  const [copiedName, setCopiedName] = useState('');
  return (
    <>
      <div
        className={`flex items-center cursor-pointer text-sm font-medium text-gray-900 ${
          copied && copiedName === 'userName'
            ? 'text-blue-500'
            : 'text-gray-500'
        }`}
      >
        <div
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            copy(`${row.original.first} ${row.original.last}`);
            setCopied(true);
            setCopiedName('userName');
            setTimeout(() => {
              setCopied(false);
              setCopiedName('');
            }, 1000);
          }}
        >
          {row.original.first} {row.original.last}
          {row.original.first && (
            <div className="ml-2 flex items-center justify-between">
              <Copy size={15} />
            </div>
          )}
        </div>
      </div>
      <div
        className={`flex items-center cursor-pointer text-sm font-medium ${
          copied && copiedName === 'email' ? 'text-blue-500' : 'text-gray-500'
        }`}
      >
        <div
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            copy(row.original.email);
            setCopied(true);
            setCopiedName('email');
            setTimeout(() => {
              setCopied(false);
              setCopiedName('');
            }, 1000);
          }}
        >
          {row?.original?.email?.substr(0, 22)}
          <span>{row?.original?.email?.length >= 23 && '...'}</span>
          {row?.original?.email && (
            <div className="ml-2 flex items-center justify-between">
              <Copy size={15} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function TitleCell({ row }) {
  const [copied, setCopied] = useState(false);
  const [copiedName, setCopiedName] = useState('');
  return (
    <>
      <div
        className={`flex items-center text-sm font-medium ${
          copied && copiedName === 'first' ? 'text-blue-500' : 'text-gray-900'
        }`}
      >
        <div
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            copy(row.original.name.title);
            setCopied(true);
            setCopiedName('title');
            setTimeout(() => {
              setCopied(false);
              setCopiedName('');
            }, 1000);
          }}
        >
          {row.original.name.title}
          {row.original.name.title && (
            <div className="ml-2 items-center cursor-pointer justify-between">
              <Copy size={15} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function FirstCell({ row }) {
  const [copied, setCopied] = useState(false);
  const [copiedName, setCopiedName] = useState('');
  return (
    <>
      <div
        className={`flex items-center text-sm font-medium ${
          copied && copiedName === 'first' ? 'text-blue-500' : 'text-gray-900'
        }`}
      >
        <div
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            copy(row.original.name.first);
            setCopied(true);
            setCopiedName('first');
            setTimeout(() => {
              setCopied(false);
              setCopiedName('');
            }, 1000);
          }}
        >
          {row.original.name.first}
          {row.original.name.first && (
            <div className="ml-2 items-center cursor-pointer justify-between">
              <Copy size={15} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function LastCell({ row }) {
  const [copied, setCopied] = useState(false);
  const [copiedName, setCopiedName] = useState('');
  return (
    <>
      <div
        className={`flex items-center text-sm font-medium ${
          copied && copiedName === 'last' ? 'text-blue-500' : 'text-gray-900'
        }`}
      >
        <div
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            copy(row.original.name.last);
            setCopied(true);
            setCopiedName('last');
            setTimeout(() => {
              setCopied(false);
              setCopiedName('');
            }, 1000);
          }}
        >
          {row.original.name.last}
          {row.original.name.last && (
            <div className="ml-2 items-center cursor-pointer justify-between">
              <Copy size={15} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function PhoneCell({ row }) {
  const [copied, setCopied] = useState(false);
  const [copiedName, setCopiedName] = useState('');
  return (
    <>
      <div
        className={`flex items-center text-sm font-medium ${
          copied && copiedName === 'phone' ? 'text-blue-500' : 'text-gray-900'
        }`}
      >
        <div
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            copy(row.original.phone);
            setCopied(true);
            setCopiedName('first');
            setTimeout(() => {
              setCopied(false);
              setCopiedName('');
            }, 1000);
          }}
        >
          {row.original.phone}
          {row.original.phone && (
            <div className="ml-2 items-center cursor-pointer justify-between">
              <Copy size={15} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function AdressCell({ row }) {
  const [copied, setCopied] = useState(false);
  const [copiedName, setCopiedName] = useState('');
  return (
    <>
      <div
        className={`flex items-center text-sm font-medium ${
          copied && copiedName === 'adress' ? 'text-blue-500' : 'text-gray-900'
        }`}
      >
        <div
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            copy(row.original.location.adress);
            setCopied(true);
            setCopiedName('adress');
            setTimeout(() => {
              setCopied(false);
              setCopiedName('');
            }, 1000);
          }}
        >
          {row.original.location.street.number} {row.original.location.state}
          {row.original.location.adress && (
            <div className="ml-2 items-center cursor-pointer justify-between">
              <Copy size={15} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
